import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { MenuList } from '../model/menu-list.model';
import { RestaurantList } from '../model/restaurant-list.model';

const baseURL = "http://localhost:3000/api/restaurants"

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants(params?: any): Observable<RestaurantList> {

    let queryParameters = {}

    if (params) {
      queryParameters = {
        params: new HttpParams()
         .set("page", params.page || "")
         .set("pageSize", params.pageSize || "")
         .set("filter", params.filter && JSON.stringify(params.filter) || "")
      }
    }

    return this.http.get(baseURL, queryParameters).pipe(map((result: any) => {
      return new RestaurantList(result);
    }))
  }

  

  getMenus(restaurnatId: number): Observable<MenuList>{
    return this.http.get(`${baseURL}/${restaurnatId}/menus`).pipe(map(x => {
      return new MenuList(x);
    }))
  }


}
