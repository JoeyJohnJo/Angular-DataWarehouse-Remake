import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShapesComponent } from './shapes/shapes.component';
import { ButtonComponent } from './button/button.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShapesComponent,
    ButtonComponent,
    FeatureCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
