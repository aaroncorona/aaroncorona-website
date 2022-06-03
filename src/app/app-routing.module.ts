import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ExpComponent} from "./exp/exp.component";

const routes: Routes = [
  {path: '', component: AboutComponent}, // Set About as the default/home page
  {path: 'exp', component: ExpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
