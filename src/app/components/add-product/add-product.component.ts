import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  message = '';
    productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
  });
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {

}
  onSubmit() {

    let product = new Product();
    product.name = this.productForm.get('name').value;
    product.description = this.productForm.get('description').value;
    product.price = this.productForm.get('price').value;
    product.productCategoryId = this.productForm.get('category').value;

    this.productService.add(product).then( response => {
      this.message = 'product successfully added';
    })
    .catch( error => {
      this.message = 'An error ocurred';
    });
  }
}
