import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

import { lanjuage } from 'src/app/helpers/languaje';

import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  idiom = new lanjuage();
  user: User;
  constructor(
    private sidebarService: SidebarService,
    private usersService: UsersService
  ) {
    this.menuItems = sidebarService.menu;

    this.user = usersService.user;
  }

  ngOnInit(): void {}
}
