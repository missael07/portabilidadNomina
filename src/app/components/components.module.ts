import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ButtonComponent, ModalComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ButtonComponent, ModalComponent],
})
export class ComponentsModule {}
