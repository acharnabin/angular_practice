import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterLink, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const authRoutes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'signup', component: SignupComponent},
      { path: 'signin', component: SigninComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(authRoutes), CommonModule, ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
