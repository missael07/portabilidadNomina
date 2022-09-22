import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './settings/users/users.component';
import { UserprofileComponent } from './settings/users/userprofile/userprofile.component';
import { RequestsComponent } from './requests/requests.component';
import { CreateRequestsComponent } from './create-requests/create-requests.component';

@NgModule({
  declarations: [PagesComponent, ProfileComponent, UsersComponent, UserprofileComponent, RequestsComponent, CreateRequestsComponent],
  exports: [PagesComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
