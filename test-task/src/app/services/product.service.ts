import { Injectable } from '@angular/core';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, Subject } from 'rxjs';
import { OrdersService } from './order.servive';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient,
    private orderService: OrdersService ) { }

  items: Product[] = [];
  
  addToCart(product: Product) {
     const itemIndex = this.items.findIndex(item => item.id === product.id);
     if (itemIndex > -1) {
      this.items[itemIndex].count +=1;
     }
     else {
      this.items.push({...product, count: 1});
     }
     localStorage.setItem('basket', JSON.stringify(this.items));
     this.orderService.basket.next(this.items);

  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  
  getShippingPrices() {
    return this.http.get<{id: number, name: string, price: number, description: string, count: number}[]>('/assets/product.json');
  }
 
}
