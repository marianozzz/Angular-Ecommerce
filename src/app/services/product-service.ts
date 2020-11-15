import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'https://utn-avanzada2-tp-final.herokuapp.com/api/Product';

  constructor(private https: HttpClient) { }

   getAll(): Promise<any> {
    return this.https.get(this.apiURL).toPromise();
  }


  add(product: Product): Promise <any> {
    const httpOpcions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.https.post(this.apiURL, product, httpOpcions).toPromise();
  }
}
