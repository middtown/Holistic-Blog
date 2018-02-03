import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  baseUrl = "http://localhost:3000";


  constructor( private http: Http ) { }


  // USER FUNCTIONS
  getAllProducts(){
    console.log("getting all products");
    return this.http.get(`${this.baseUrl}/api/products`)
  }

  getOneProduct(productId){
    console.log(productId);
    return this.http.get(`${this.baseUrl}`)
  }


  // ADMIN FUNCTIONS
  saveNewProduct(newProduct){
    console.log('Saving new product:', newProduct);
    return this.http.post(`${this.baseUrl}/api/product/addNew`, newProduct);
    
  }

  deleteProduct(deleteProduct){
    console.log("Deleting product...");
  }
  
  saveEditedProduct(productId, editedProduct){
    console.log('THE PROD ID', productId);
    console.log('Saving newly edited product', editedProduct);
    return this.http.put(`${this.baseUrl}/api/product/${productId}`, editedProduct)
  }


}
