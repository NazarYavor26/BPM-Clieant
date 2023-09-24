import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpmLayoutComponent } from './project/components/bpm-layout/bpm-layout.component';
import { DashboardComponent } from './project/components/dashboard/dashboard.component';
import { LoginComponent } from './authorization/components/login/login.component';

const routes: Routes = [
  { path:'', component:BpmLayoutComponent, children: [ 
    { path: "dashboard", component:DashboardComponent}
  ] },
  { path:'login', component:LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
