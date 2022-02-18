import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantList } from '../model/restaurant-list.model';
import { RestaurantService } from '../serivces/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantList = new RestaurantList();

  params = {
    page: 1,
    pageSize: 10,
    filter: {
      priceFrom: 0,
      priceTo: 5,
      cuisine: ""
    }
  }

  constructor(private resaurantService: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRestaurants();

    // hvatamo promenu parametra rute cuisine i smestamo ga u params.filter.cuisine
    this.route.params.subscribe((params: any) => {
      this.params.filter.cuisine = params['cuisine'];
      this.getRestaurants();
   });
  }

  getRestaurants() {
    this.resaurantService.getRestaurants(this.params).subscribe((data: RestaurantList) => {
      this.restaurants = data;
    }, err => {
      alert(err);
    })
  }

  pageChanged(newPage: any) {
    this.params.page = newPage;
    this.getRestaurants();
  }

}
