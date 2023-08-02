import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  constructor( private route: ActivatedRoute,
    private cartService: ProductService) {}
  
  product: Product | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.cartService.getShippingPrices().subscribe(products=> {
    this.product = products.find(product => product.id === productIdFromRoute)
     })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
