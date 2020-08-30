import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{
  constructor() { }
  @Input('text') text: string
  @Input('text_color') text_color: string
  @Input('color') color: string
  @Input('width') width: string
  @Input('height') height: string
}
