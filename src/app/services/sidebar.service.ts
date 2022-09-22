import { Injectable } from '@angular/core';
import { lanjuage } from 'src/app/helpers/languaje';

import { UsersService } from './users.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  idiom = new lanjuage();
  public user: User;
  menu: any;
  constructor(private usersServices: UsersService) {
    this.user = usersServices.user;
    console.log(this.user);
    this.menu = [
      {
        title: '',
        icon: '',
        class: 'user-profile',
        display: true,
        submenu: [
          { title: this.idiom.profile, url: 'profile' },
          {
            title: this.idiom.accountSettings,
            url: 'app-settings',
          },
          {
            title: 'Solicitudes',
            url: 'requests',
          },
        ],
      },
      {
        title: 'Dashboard',
        icon: 'mdi mdi-gauge',
        class: 'user-profile',
        display: true,
        submenu: [{ title: 'Resumen', url: '/' }],
      },
      {
        title: this.idiom.settingsTitle,
        icon: 'mdi mdi-folder-lock-open',
        class: 'user-profile',
        display: this.user.role === 'ADMIN',
        submenu: [{ title: this.idiom.users, url: 'users' }],
      },
    ];
  }
}
