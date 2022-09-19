import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ModalService } from '../../services/modal.service';
import { UsersService } from 'src/app/services/users.service';

import { lanjuage } from 'src/app/helpers/languaje';
import { getMEssage, displayAlert } from 'src/app/helpers/get-errors';
import { User } from 'src/app/models/user.model';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  public idiom = new lanjuage();
  public roles: any[] = [];
  public createForm: any = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    isActive: [true],
    role: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    bDay: ['', [Validators.required]],
    password: ['abc123456', [Validators.required]],
  });
  public formSubmitted = false;
  public imgFile: any;
  public imgTemp: any;

  constructor(
    public modalService: ModalService,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private fileUpload: FileUploadService
  ) {
    this.loadRoles();
  }
  ngOnInit(): void {
    this.loadRoles();
  }
  loadRoles() {
    this.usersService.loadRoles().subscribe((resp: any) => {
      this.roles = resp.roles;
    });
  }
  closeModal() {
    this.imgTemp = null;
    this.modalService.hiddeModalMethod(true);
  }
  createUser() {
    this.formSubmitted = true;
    console.log(this.imgFile);
    if (this.createForm.invalid) return console.log('Formulario con errores');
    this.usersService.createUser(this.createForm.value).subscribe(
      (resp) => {
        this.uploadImg(this.imgFile, resp.user.uid);
        displayAlert(this.idiom.saveTitle, this.idiom.saveMessage, 'success');
        this.modalService.newUser.emit('reload');
        this.closeModal();
      },
      (err) => {
        console.log(err);
        const msg = getMEssage(err.error.msg);
        displayAlert('Error', msg, err.status, 'error');
      }
    );
  }

  change() {
    const element = document.getElementById('imgInput');
    element?.click();
  }

  changeImage(event: any) {
    this.imgFile = event.target.files[0];
    if (!this.imgFile) return (this.imgTemp = null);

    const reader = new FileReader();
    reader.readAsDataURL(this.imgFile);

    reader.onloadend = () => {
      this.imgTemp = reader.result;
    };

    return;
  }

  uploadImg(imgFile: any, uid: string) {
    this.fileUpload.updatePhoto(imgFile, uid).then(
      (img) => {},
      (err) => {
        const msg = getMEssage(err.error.msg);
        displayAlert('Error', msg, err.status, 'error');
      }
    );
  }
  // registerUser() {
  //   this.formSubmitted = true;
  //   if (this.createForm.invalid || !this.createForm.get('terms')?.value)
  //     return console.log('Formulario con errores');

  //   this.usersService.createUser(this.createForm.value).subscribe(
  //     (resp) => {
  //       displayAlert(this.idiom.successTitle, this.idiom.successMessage);
  //       this.router.navigateByUrl('/');
  //     },
  //     (err) => {
  //       console.warn(err.error.msg);
  //       const msg = getMEssage(err.error.msg);
  //       displayAlert('Error', msg, err.status);
  //     }
  //   );
  // }
}
