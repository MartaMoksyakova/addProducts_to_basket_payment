import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/products';
import { OrdersService } from 'src/app/services/order.servive';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{

  constructor(
    private cartService: ProductService,
    private http: HttpClient,
    private orderService: OrdersService
  ) { }
    ngOnInit(): void {
      this.getTotalPrice();
      console.log(this.totalPrice)
     }
  

  items = this.cartService.getItems();
  totalPrice: number | undefined;
  


 

  // order = {
  //   userName: '',
  //   userPhone: '',
  //   userAdress: '',
  //   userComment:''
  // };

  // getTotalCost() {
  //   return this.product.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  // }

  productCount(product: Product, status: boolean) {
    if (status) {
      product.count++;
    } else {
      if (product.count > 1) {
        product.count--;
      }
    }
    this.updateLocalProducts();
    this.getTotalPrice()
  }

  updateLocalProducts(): void {
    localStorage.setItem('basket', JSON.stringify(this.items));
    this.orderService.basket.next(this.items);
  }
  getTotalPrice(): void {
    this.totalPrice = this.items.reduce((total, elem) => {
      return total + (elem.count * elem.price);
    }, 0);
  }



 

  

}
