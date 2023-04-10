
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseURL =
  'https://api.vatcomply.com/rates';



@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  
    constructor(private http: HttpClient) {}
  
    getProducts() {
      return this.http.get(baseURL);
    }
      
    getProductsWithDivisa(divisa:string) {
      return this.http.get(baseURL+"?base="+divisa);
    }
    
}

