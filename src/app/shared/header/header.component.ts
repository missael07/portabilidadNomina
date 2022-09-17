import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service';
// import { lanjuage } from 'src/app/helpers/languaje';
// import { User } from '../../models/user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  showMx = localStorage.getItem('lan') === 'ES' ? true : false;
  // idiom = new lanjuage();

  // public user: User;
  google? = false;
  constructor() {
    // this.user = us.user;
    // this.google = us.user.google;
  }

  ngOnInit(): void {}

  logOut() {
    // this.us.logOut();
  }

  changeLanguaje(lan: string) {
    localStorage.setItem('lan', lan);
    this.showMx = localStorage.getItem('lan') === 'ES' ? true : false;
    window.location.reload();
  }
}
