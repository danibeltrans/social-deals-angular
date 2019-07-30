import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
  ],
  exports: [
    SideBarComponent,
  ]
})
export class SideBarModule { }
