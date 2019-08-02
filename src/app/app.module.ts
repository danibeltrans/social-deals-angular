import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarModule } from './modules/side-bar/side-bar.module';
import { DealsfeedComponent } from './modules/dealsfeed/dealsfeed.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchBarComponent } from './modules/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    DealsfeedComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
