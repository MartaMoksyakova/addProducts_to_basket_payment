import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../products';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products : any = [];
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: ProductService) { }
  

  ngOnInit(): void {
     const routeParams = this.route.snapshot.paramMap;
     const productIdFromRoute = Number(routeParams.get('productId'));
     
     this.cartService.getShippingPrices().subscribe(products=> {
     this.product = products.find(product => product.id === productIdFromRoute)
     this.products = products;
     }
    )
  }

}
