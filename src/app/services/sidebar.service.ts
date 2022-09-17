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
    this.menu = [
      {
        title: '',
        icon: '',
        class: 'user-profile',
        submenu: [
          { title: this.idiom.profile, url: 'profile' },
          { title: this.idiom.accountSettings, url: 'account-settings' },
        ],
      },
      {
        title: 'Dashboard',
        icon: 'mdi mdi-gauge',
        class: 'user-profile',
        submenu: [{ title: 'Main', url: '/' }],
      },
      {
        title: this.idiom.settingsTitle,
        icon: 'mdi mdi-folder-lock-open',
        class: 'user-profile',
        submenu: [{ title: this.idiom.users, url: 'users' }],
      },
    ];
  }
}
