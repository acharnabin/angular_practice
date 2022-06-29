import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthRoutingModule } from './auth-routing.module';
import { Route, RouterLink, RouterModule, Routes } from '@angular/router';
import { FotgotpassComponent } from './fotgotpass/fotgotpass.component';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    FotgotpassComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AuthRoutingModule,

  ]
})
export class AuthModule { }
