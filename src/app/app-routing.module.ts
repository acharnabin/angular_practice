import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [{ path: '', component: AuthRoutingModule }];

@NgModule({
  declarations: [],
  imports: [AuthRoutingModule, RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
