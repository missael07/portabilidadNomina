import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [PagesComponent],
})
export class PagesModule {}
