import { Component, OnInit } from '@angular/core';

import { lanjuage } from 'src/app/helpers/languaje';

import { User } from '../../models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  showMx = localStorage.getItem('lan') === 'ES' ? true : false;
  idiom = new lanjuage();

  public user: User;
  google? = false;
  constructor(private userService: UsersService) {
    this.user = userService.user;
    this.google = userService.user.google;
  }

  ngOnInit(): void {}

  logOut() {
    this.userService.logOut();
  }

  changeLanguaje(lan: string) {
    localStorage.setItem('lan', lan);
    this.showMx = localStorage.getItem('lan') === 'ES' ? true : false;
    window.location.reload();
  }
}
