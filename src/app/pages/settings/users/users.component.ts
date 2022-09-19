import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { lanjuage } from '../../../helpers/languaje';

import { SearchService } from '../../../services/search.service';
import Swal from 'sweetalert2';
import { getMEssage, displayAlert } from 'src/app/helpers/get-errors';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ModalService } from '../../../services/modal.service';
import { delay, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [],
})
export class UsersComponent implements OnInit, OnDestroy {
  public idiom = new lanjuage();
  public users: User[] = [];
  public usersTemp: User[] = [];
  public countUsers: number = 0;
  public from: number = 0;
  public loading: boolean = true;
  public noDataFound: boolean = false;
  public userDB: User;
  public displayDDL?: string = '';
  public element: any;
  public role: string = '';
  public roles: any[] = [];
  public impersonate: string = this.idiom.impersonate;
  public displayMobileTable = false;

  public createuserSubs: Subscription;

  constructor(
    private usersService: UsersService,
    private searchService: SearchService,
    private router: Router,
    private modalService: ModalService
  ) {
    this.userDB = usersService.user;
    this.role = usersService.user.role;
    if (this.role !== 'ADMIN') router.navigateByUrl('dashboard');
    this.displayMobileTable = window.screen.width < 1500 ? true : false;
    this.createuserSubs = new Subscription();
  }

  ngOnInit(): void {
    this.loadUsers();
    this.loadRoles();
    this.displayMobileTable = window.screen.width < 1500 ? true : false;
    this.createuserSubs = this.modalService.newUser.subscribe((resp) => {
      console.log(resp);
      this.loadUsers();
    });
  }

  ngOnDestroy(): void {
    this.createuserSubs.unsubscribe();
  }

  loadRoles() {
    this.usersService
      .loadRoles()
      .pipe(delay(100))
      .subscribe((resp: any) => {
        this.roles = resp.roles;
      });
  }
  loadUsers(timeOut: number = 3500) {
    this.usersService.loadUsers(this.from).subscribe(({ total, users }) => {
      this.users = users;
      this.usersTemp = users;
      this.countUsers = total;
      this.loading = false;
      this.noDataFound = false;
    });
  }

  changePage(valor: number) {
    if (valor === 0) {
      this.from = valor;
    } else if (valor === -5 && this.from > 0) {
      this.from += valor;
    } else if (
      valor === 5 &&
      this.from < this.countUsers - (this.countUsers % 5)
    ) {
      this.from += valor;
    }

    this.loadUsers(100);
  }

  search(term: string) {
    console.log(term);
    if (term.length === 0) {
      this.users = this.usersTemp;
    } else {
      this.searchService.search('users', term).subscribe((resp) => {
        this.users = resp;
        this.countUsers = this.users.length;
        this.loading = false;
        this.noDataFound = false;
      });

      if (this.users.length === 0) {
        setTimeout(() => {
          this.loading = false;
        }, 3500);
      }
    }
  }

  deleteUser(user: User) {
    Swal.fire({
      title: this.idiom.deleteTitle,
      text: this.idiom.deleteSubTitle.replace('{0}', user.name),
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.idiom.confirmMessage,
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deleteUser(user).subscribe((resp: any) => {
          const msg = getMEssage(resp.msg);
          displayAlert(this.idiom.successTitle, msg, '', 'success');
          this.loadUsers(100);
        });
      }
    });
  }

  changeRole(user: User) {
    this.displayDDL = '';
    this.element = '';

    this.usersService.changeRole(user).subscribe((resp) => {});
  }

  displayDDl(roleUid: string, uid?: string) {
    this.displayDDL = uid;
    this.element = document.getElementById(roleUid);
    console.log(this.element);
    this.element = roleUid;
  }

  impersonateUser(user: User) {
    Swal.fire({
      title: 'Impersonate',
      text: 'Estas apunto de iniciar sesion como ' + user.name,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.idiom.confirmMessage,
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.impersonateUser(user).subscribe((resp: any) => {
          const { token, user } = resp;
          localStorage.setItem('token', token);
          // this.userDB = user;
          this.userDB.img = user.img;
          this.userDB.name = user.name;
          this.userDB.role = user.role;
          this.userDB.google = user.google;
          this.userDB.uid = user.uid;

          // const currentUrl = this.router.url;
          // this.router.navigateByUrl('/').then(() => {
          //   this.router.navigate([currentUrl]);
          // });
          window.location.reload();
        });
      }
    });
  }

  goUserProfilePage(id: string) {
    this.router.navigateByUrl(`dashboard/user-profile?id=${id}`);
  }

  async displayCreateModal() {
    await this.modalService.hiddeModalMethod(false);
    console.log('test');
  }
}
