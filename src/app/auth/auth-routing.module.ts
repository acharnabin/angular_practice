import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const authRoutes: Routes = [
  {
    path: '',
    children: [{ path: 'signup', component: SignupComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(authRoutes), CommonModule],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
