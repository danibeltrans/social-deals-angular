import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealsfeedComponent } from './modules/dealsfeed/dealsfeed.component';


const routes: Routes = [
  { path: 'index', component: DealsfeedComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
