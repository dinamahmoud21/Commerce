import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import {ItemDetailsComponent}   from './item-details/item-details.component'
import {SubitemComponent} from './subitem/subitem.component'
import {LoginComponent} from './login/login.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {path:'Product' ,component:ProductDetailsComponent},

{path:'' ,redirectTo:'/Home' ,pathMatch: 'full'} ,
{path:'login' ,component :LoginComponent},
 {path:'Home' ,component:HomeComponent } ,
{path:'itemdetails/:id' ,component:ItemDetailsComponent},
{path:'subitem/:id' ,component:SubitemComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
