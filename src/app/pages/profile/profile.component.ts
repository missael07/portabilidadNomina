import { Component, OnInit } from '@angular/core';
import { lanjuage } from 'src/app/helpers/languaje';

import { UsersService } from '../../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { getMEssage, displayAlert } from '../../helpers/get-errors';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  idiom = new lanjuage();
  user: User;

  public profileForm: any;
  public imgFile: any;
  public imgTemp: any;
  public formSubmitted = false;
  public roles: any[] = [];
  userId: string = '';
  userFilled = false;
  settingsTouched = false;
  public isActive: boolean = true;
  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private fu: FileUploadService
  ) {
    this.user = usersService.user;
    this.userFilled = true;
  }

  ngOnInit(): void {
    console.log(this.user);
    this.profileForm = this.fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.email, Validators.required]],
      isActive: [this.user.isActive],
      role: [this.user.role, [Validators.required]],
      gender: [this.user.gender, [Validators.required]],
      bDate: [
        this.user.bDate,
        [Validators.required, Validators.pattern('d{2}-d{2}-d{4}')],
      ],
    });
    this.loadRoles();
  }
  loadRoles() {
    this.usersService.loadRoles().subscribe((resp: any) => {
      this.roles = resp.roles;
    });
  }

  updateProfile() {
    this.formSubmitted = true;
    if (this.profileForm.invalid) return console.log('Formulario con errores');
    this.usersService.updateUser(this.profileForm.value).subscribe(
      (resp) => {
        const { name, email, role } = this.profileForm.value;
        this.user.name = name;
        this.user.email = email;
        this.user.role = role;

        displayAlert(this.idiom.saveTitle, this.idiom.saveMessage, 'success');
      },
      (err) => {
        console.log(err);
        const msg = getMEssage(err.error.msg);
        displayAlert('Error', msg, err.status, 'error');
      }
    );
  }

  changeImage(event: any) {
    this.imgFile = event.target.files[0];
    if (!this.imgFile) return (this.imgTemp = null);

    const reader = new FileReader();
    reader.readAsDataURL(this.imgFile);

    reader.onloadend = () => {
      this.imgTemp = reader.result;
      this.uploadImg();
    };

    return;
  }

  uploadImg() {
    this.fu.updatePhoto(this.imgFile, this.user.uid).then(
      (img) => {
        this.user.img = img;
        displayAlert(this.idiom.saveTitle, this.idiom.saveMessage, 'success');
      },
      (err) => {
        const msg = getMEssage(err.error.msg);
        displayAlert('Error', msg, err.status, 'error');
      }
    );
  }

  change() {
    const element = document.getElementById('imgInput');
    element?.click();
  }

  changeRole(user: User) {
    this.usersService.changeRole(user).subscribe((resp) => {});
  }
}
