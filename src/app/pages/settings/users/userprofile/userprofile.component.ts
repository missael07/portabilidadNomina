import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../../../services/users.service';
import { lanjuage } from '../../../../helpers/languaje';
import { User } from 'src/app/models/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import {
  getMEssage,
  displayAlert,
  displayResultAlert,
} from 'src/app/helpers/get-errors';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  public profileForm: any;
  userId: string = '';
  user!: User;
  idiom = new lanjuage();
  userFilled = false;
  formSubmitted = false;
  public roles: any[] = [];
  settingsTouched = false;
  public isActive: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private userServices: UsersService,
    private fb: FormBuilder
  ) {
    // this.user = new User('', '', '', '', '', false, '', '');
  }

  async ngOnInit() {
    this.getQueryParams();
    this.loadRoles();
    await this.getUser();
    this.profileForm = this.fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.email, Validators.required]],
      role: [this.user.role, [Validators.required]],
      isActive: [this.user.isActive],
    });
  }

  getQueryParams() {
    this.route.queryParams.subscribe((params) => {
      this.userId = params['id'];
    });
  }

  getUser() {
    return new Promise<User>((resolve) => {
      this.userServices.getUser(this.userId).subscribe((resp: User) => {
        this.user = resp;
        this.userFilled = true;
        resolve(this.user);
      });
    });
  }

  loadRoles() {
    this.userServices.loadRoles().subscribe((resp: any) => {
      console.log(resp);
      this.roles = resp.roles;
    });
  }

  updateProfile() {
    this.formSubmitted = true;
    console.log(this.profileForm.get('email')?.value);
    console.log(this.profileForm.get('name')?.value);
    // if (this.profileForm.invalid) return console.log('Formulario con errores');
    // this.userServices.updateUser(this.profileForm.value).subscribe(
    //   (resp) => {
    //     const { name, email, role, isActive } = this.profileForm.value;
    //     this.user.name = name;
    //     this.user.email = email;
    //     this.user.role = role;
    //     this.user.isActive = isActive;

    //     displayAlert(this.idiom.saveTitle, this.idiom.saveMessage, 'success');
    //   },
    //   (err) => {
    //     console.log(err);
    //     const msg = getMEssage(err.error.msg);
    //     displayAlert('Error', msg, err.status, 'error');
    //   }
    // );
  }

  change() {
    const element = document.getElementById('imgInput');
    element?.click();
  }

  changeRole(user: User) {
    this.userServices.changeRole(user).subscribe((resp) => {});
  }
  // changeText(active: string) {
  //   this.isActive = active === this.isActive ? 'Activo' : 'inactivo';
  // }
}
