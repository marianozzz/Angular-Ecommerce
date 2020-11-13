import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productArray: Array<Product> = [];
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {

    this.productService.getAll().then(response => {
      this.productArray = response;
    })
      .catch(error => { });
  }

}
