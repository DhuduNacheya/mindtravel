import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { ContactusComponent } from './contactus/contactus.component';
 import { PlacesComponent } from './places/places.component';
 import { ExploreComponent } from './explore/explore.component';
 import { HomeComponent } from './home/home.component';

 
 const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'home' },
   {path:'home',component:HomeComponent},
   { path: 'contactus', component: ContactusComponent },
   { path: 'places', component: PlacesComponent },
   { path: 'explore', component: ExploreComponent },
   {path: '**', component: HomeComponent} 
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
 
 export const routingComponents = [HomeComponent,ContactusComponent, PlacesComponent, ExploreComponent];