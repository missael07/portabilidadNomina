import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { AuthGuard } from '../guards/auth.guard';
import { lanjuage } from 'src/app/helpers/languaje';
import { ProfileComponent } from './profile/profile.component';
// import { UsersComponent } from './settings/users/users.component';
// import { UserprofileComponent } from './settings/users/userprofile/userprofile.component';
import { CreateRequestsComponent } from './create-requests/create-requests.component';
import { RequestsComponent } from './requests/requests.component';
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
      {
        path: 'requests',
        component: RequestsComponent,
        data: {
          title: 'Solicitudes',
          pageComing: idiom.profile,
          currentPage: 'Solicitudes',
          pathFather: 'profile',
        },
      },
      {
        path: 'create-request',
        component: CreateRequestsComponent,
        data: {
          title: 'Solicitudes',
          pageComing: 'Solicitudes',
          currentPage: 'Crear Solicitud',
          pathFather: 'requests',
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
      {
        path: 'user-profile',
        component: UserprofileComponent,
        data: {
          title: 'Usuario',
          pageComing: idiom.users,
          currentPage: 'Usuario',
          path: 'profile',
          pathFather: 'users',
        },
      },
      //#endregion Settings
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
