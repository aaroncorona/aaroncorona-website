import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ExpComponent} from "./exp/exp.component";
import {EducationComponent} from "./education/education.component";
import {ProjectsComponent} from "./projects/projects.component";
import {SkillsComponent} from "./skills/skills.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: '', component: AboutComponent}, // Set About as the default/home page
  {path: 'exp', component: ExpComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'education', component: EducationComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
