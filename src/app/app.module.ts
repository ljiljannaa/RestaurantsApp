import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './restaurants/restaurant-item/rating/rating.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    PaginationComponent,
    MenuComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
