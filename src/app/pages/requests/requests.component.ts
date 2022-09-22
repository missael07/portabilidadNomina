import { Component, OnInit } from '@angular/core';
import { lanjuage } from 'src/app/helpers/languaje';
import { RequestsService } from '../../services/requests.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { displayAlert } from '../../helpers/get-errors';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent implements OnInit {
  public requests: any[] = [];
  public loading: boolean = true;
  public idiom = new lanjuage();
  public totalRequests: number = 0;

  constructor(
    private requestService: RequestsService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.requestService
      .getRequestsByID(this.userService.user.uid, this.userService.user.role)
      .subscribe((resp: any) => {
        console.log(resp);
        this.requests = resp.requests;
        this.totalRequests = resp.total;
        this.loading = false;
      });
  }

  addNewRequest() {
    this.router.navigateByUrl('dashboard/create-request');
    // await this.modalService.hiddeModalMethod(false);
    // console.log('test');
  }

  deleteRequest(requestId: string) {
    Swal.fire({
      title: this.idiom.deleteTitle,
      text: 'Se eliminara esta solicitud de ausencia. Esta accion es irreversible',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.idiom.confirmMessage,
    }).then((result) => {
      if (result.isConfirmed) {
        this.requestService.deleteRequest(requestId).subscribe((resp: any) => {
          displayAlert(
            this.idiom.successTitle,
            'Solicitud eliminada correctamente',
            '',
            'success'
          );
          this.loadRequests();
        });
      }
    });
  }
}
