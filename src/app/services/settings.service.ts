import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');
  constructor() {
    this.loadTheme();
  }
  loadTheme() {
    const url =
      localStorage.getItem('theme') || 'assets/css/colors/megna-dark.css';
    if (url && this.linkTheme) {
      this.linkTheme.setAttribute('href', url);
    }
  }

  changeTheme(theme: string) {
    if (this.linkTheme) {
      const url = `assets/css/colors/${theme}.css`;
      this.linkTheme.setAttribute('href', url);
      localStorage.setItem('theme', url);
      this.checkCurrentTheme();
    }
  }

  checkCurrentTheme() {
    if (this.linkTheme) {
      const linkThemeURL = this.linkTheme.getAttribute('href');
      const links = document.querySelectorAll('.selector');
      links.forEach((element: any) => {
        element.classList.remove('working');
        const btnTheme = element.getAttribute('data-theme');
        const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;
        if (btnThemeUrl === linkThemeURL) {
          element.classList.add('working');
        }
      });
    }
  }
}
