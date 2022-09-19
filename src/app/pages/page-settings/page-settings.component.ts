import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { lanjuage } from 'src/app/helpers/languaje';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.css'],
})
export class PageSettingsComponent implements OnInit {
  idiom = new lanjuage();

  public links: any;
  constructor(private settingService: SettingsService) {}

  ngOnInit(): void {
    this.settingService.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settingService.changeTheme(theme);
  }
}
