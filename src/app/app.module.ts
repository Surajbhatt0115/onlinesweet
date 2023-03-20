import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { SignupComponent } from './signup/signup.component';
import { SubhomeComponent } from './subhome/subhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SubhomeComponent,
  
    FoodPageComponent,
    CartPageComponent,
    AboutUSComponent,
    OrderPageComponent,
    SignupComponent,
    SubhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
