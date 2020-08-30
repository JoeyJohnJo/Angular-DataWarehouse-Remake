import { Component, Input } from '@angular/core';

@Component({
  selector: 'feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent {

  constructor() { }

  @Input('image') image: string
  @Input('title') title: string
  @Input('body') body: string
  @Input('color') color: string

}
