import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authorization/components/login/login.component';
import { AuthResetPasswordComponent } from './authorization/components/auth-reset-password/auth-reset-password.component';
import { AuthChangePasswordComponent } from './authorization/components/auth-change-password/auth-change-password.component';
import { DashboardComponent } from './project/components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { BpmLayoutComponent } from './project/components/bpm-layout/bpm-layout.component';
import { HomeComponent } from './project/components/home/home.component';
import { SettingsComponent } from './project/components/settings/settings.component';
import { MessagesComponent } from './project/components/messages/messages.component';
import { ToolsComponent } from './project/components/tools/tools.component';
import { PeopleComponent } from './project/components/people/people.component';
import { ProfileComponent } from './project/components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthResetPasswordComponent,
    AuthChangePasswordComponent,
    DashboardComponent,
    BpmLayoutComponent,
    HomeComponent,
    SettingsComponent,
    MessagesComponent,
    ToolsComponent,
    PeopleComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
