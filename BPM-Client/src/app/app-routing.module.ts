import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpmLayoutComponent } from './project/components/bpm-layout/bpm-layout.component';
import { DashboardComponent } from './project/components/dashboard/dashboard.component';
import { LoginComponent } from './authorization/components/login/login.component';
import { HomeComponent } from './project/components/home/home.component';
import { SettingsComponent } from './project/components/settings/settings.component';
import { ProfileComponent } from './project/components/profile/profile.component';
import { ToolsComponent } from './project/components/tools/tools.component';
import { MessagesComponent } from './project/components/messages/messages.component';
import { PeopleComponent } from './project/components/people/people.component';

const routes: Routes = [
  { path:"", component:BpmLayoutComponent, children: [ 
    { path: "", component:HomeComponent},
    // { path: "home", component:HomeComponent},
    { path: "dashboard", component:DashboardComponent},
    { path: "people", component:PeopleComponent},
    { path: "messages", component:MessagesComponent},
    { path: "tools", component:ToolsComponent},
    { path: "profile", component:ProfileComponent},
    { path: "settings", component:SettingsComponent}
  ] },

  { path:'login', component:LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
