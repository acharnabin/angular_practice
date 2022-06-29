import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  { path: 'auth', component: AuthRoutingModule }
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes),
   
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
