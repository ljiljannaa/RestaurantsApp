import { MenuItem } from "./menu-item.model";

export class Menu {
    _id: number;
    restaurants: number;
    items: MenuItem[];
    
    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.restaurants = obj && obj.restaurants || 0;
        this.items = obj && obj.items.map((x: any) => new MenuItem(x)) || [];
    }

}