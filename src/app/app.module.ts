import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarModule } from './modules/side-bar/side-bar.module';
import { DealsfeedComponent } from './modules/dealsfeed/dealsfeed.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchBarModule } from './modules/search-bar/search-bar.module';


@NgModule({
  declarations: [
    AppComponent,
    DealsfeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarModule,
    SearchBarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
