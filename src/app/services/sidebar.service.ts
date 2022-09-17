import { Injectable } from '@angular/core';
// import { lanjuage } from 'src/app/helpers/languaje';
// import { User } from '../models/user/user.model';
// import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // idiom = new lanjuage();
  // public user: User;
  menu: any;
  constructor() {
    // this.user = us.user;
    this.menu = [
      {
        title: 'Perfil',
        icon: 'fa fa-user',
        class: 'user-profile',
        submenu: [{ title: 'Perfil', url: 'profile' }],
      },
      {
        title: 'Dashboard',
        icon: 'mdi mdi-gauge',
        class: 'user-profile',
        submenu: [{ title: 'Resumen', url: '/' }],
      },
      // {
      //   title: this.idiom.settingsTitle,
      //   icon: 'mdi mdi-folder-lock-open',
      //   class: 'user-profile',
      //   submenu: [
      //     { title: this.idiom.users, url: 'users' },
      //     { title: this.idiom.hospitals, url: 'hopsitals' },
      //     { title: this.idiom.doctors, url: 'doctors' },
      //   ],
      // },
    ];
  }
}
