import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

// import { lanjuage } from 'src/app/helpers/languaje';
// import { UserService } from '../../services/user.service';
// import { User } from '../../models/user/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  // idiom = new lanjuage();
  // user: User;
  constructor(private sidebarService: SidebarService) {
    this.menuItems = sidebarService.menu;
    // this.user = us.user;
  }

  ngOnInit(): void {}
}
