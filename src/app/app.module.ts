import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from  '@angular/fire/compat/firestore/';
import { firebase } from 'src/environments/firebase';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NavbarComponent } from './navbar/navbar.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule } from "@angular/forms";
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgArrayPipesModule } from 'ngx-pipes';
import { filterproductPipe } from './Pips/event.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {OnCreate} from './Services/app.directive';
import { ItemDetailsComponent } from './item-details/item-details.component'
import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@rybos/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FooterComponent } from './footer/footer.component';
import { SubitemComponent } from './subitem/subitem.component';
import { NgxPanZoomModule } from 'ngx-panzoom';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductDetailsComponent,
    filterproductPipe,
    OnCreate,
    ItemDetailsComponent,
    FooterComponent,
    SubitemComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, 
    NgSelectModule,
     FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPanZoomModule,
    SlickCarouselModule,
    IvyCarouselModule,
    NgArrayPipesModule,
    HttpClientModule,
     NgxGalleryModule,
     BrowserAnimationsModule,
     NgxImageZoomModule
     
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA], 
})
export class AppModule { }
