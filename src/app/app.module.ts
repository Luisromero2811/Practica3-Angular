import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteoneComponent } from './routeone/routeone.component';
import { RoutetwoComponent } from './routetwo/routetwo.component';
import { RoutetringComponent } from './routetring/routetring.component';
import { RoutejsonComponent } from './routejson/routejson.component';
import { RoutenotfoundComponent } from './routenotfound/routenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteoneComponent,
    RoutetwoComponent,
    RoutetringComponent,
    RoutejsonComponent,
    RoutenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
