import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouteoneComponent} from './routeone/routeone.component';
import {RoutetwoComponent} from './routetwo/routetwo.component';
import {RoutetringComponent} from './routetring/routetring.component';
import {RoutejsonComponent} from './routejson/routejson.component';
import {RoutenotfoundComponent} from './routenotfound/routenotfound.component';
const routes: Routes = [
  
      {path:'Routeone', component: RouteoneComponent},
      {path:'Routetwo', component: RoutetwoComponent},
      {path:'Routetring/:string', component: RoutetringComponent},
      {path:'Routejson/:json/:nombre', component: RoutejsonComponent},
      {path:'**', component: RoutenotfoundComponent},    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
