import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _hiddeModal: boolean = true;

  public newUser: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  get hiddeModal() {
    return this._hiddeModal;
  }

  hiddeModalMethod(display: boolean) {
    this._hiddeModal = display;
  }
}
