import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProgressComponent } from './progress/progress.component';
// import { Grafica1Component } from './grafica1/grafica1.component';
// import { AccountSettingsComponent } from './account-settings/account-settings.component';
// import { PromisesComponent } from './promises/promises.component';
// import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';
// import { lanjuage } from 'src/app/helpers/languaje';
// import { ProfileComponent } from './profile/profile.component';
// import { UsersComponent } from './settings/users/users.component';
// import { UserprofileComponent } from './settings/users/userprofile/userprofile.component';

// const idiom = new lanjuage();
// const name = localStorage.getItem('name');
const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Resumen',
      pageComing: 'Profile',
      path: 'profile',
      currentPage: 'Resumen',
      pathFather: 'profile',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
