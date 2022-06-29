import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    HeaderComponentComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    HeaderComponentComponent
  ]
})
export class HeaderModuleModule { }
