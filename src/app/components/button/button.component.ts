import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent implements OnInit {
  @Input() title: string = '';
  @Input() classBtn: string = '';

  constructor() {}

  ngOnInit(): void {}
}
