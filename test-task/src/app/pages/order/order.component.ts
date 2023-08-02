import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required ],
    phone: ['', Validators.required ]
  });

  constructor (private cartService: ProductService,
               private formBuilder: FormBuilder) {}
    
    ngOnInit(): void {
    }

  items = this.cartService.getItems();

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
