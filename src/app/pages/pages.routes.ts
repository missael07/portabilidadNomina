import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { AuthGuard } from '../guards/auth.guard';
import { lanjuage } from 'src/app/helpers/languaje';
import { ProfileComponent } from './profile/profile.component';
// import { UsersComponent } from './settings/users/users.component';
// import { UserprofileComponent } from './settings/users/userprofile/userprofile.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';
import { UsersComponent } from './settings/users/users.component';
import { UserprofileComponent } from './settings/users/userprofile/userprofile.component';

const idiom = new lanjuage();
// const name = localStorage.getItem('name');
const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Resumen',
      pageComing: 'Dashboard',
      path: 'profile',
      currentPage: 'Resumen',
    },
    children: [
      //#region Profile
      {
        path: 'app-settings',
        component: PageSettingsComponent,
        data: {
          title: idiom.accountSettings,
          pageComing: idiom.profile,
          path: 'profile',
          currentPage: idiom.accountSettings,
          pathFather: 'profile',
        },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: idiom.profile,
          pageComing: idiom.profile,
          currentPage: idiom.editProfile,
        },
      },
      //#region Settings
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: idiom.users,
          pageComing: idiom.settingsTitle,
          currentPage: idiom.users,
          path: 'profile',
        },
      },
      { path: 'user-profile', component: UserprofileComponent },
      //#endregion Settings
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
