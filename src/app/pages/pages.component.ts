import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { displayAlert } from 'src/app/helpers/get-errors';
import { UsersService } from 'src/app/services/users.service';

declare function customInit(): any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  constructor(
    private settingService: SettingsService,
    private us: UsersService
  ) {}

  ngOnInit(): void {
    customInit();
    // if()
    // setInterval(() => {
    //   displayAlert('test', 'test', 'info');
    // }, 30000);
  }
}
