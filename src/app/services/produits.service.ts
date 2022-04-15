import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http:HttpClient) { }

  getProduits(){
    return this.http.get("http://localhost:3000/products")
  }

  deleteProduit(id:any){
    return this.http.delete("http://localhost:3000/products/"+id)
  }

  addNewProduct(productForm:any){
    return this.http.post("http://localhost:3000/products", productForm)
  }
  
  changeAvailability(product: any){
    let available = product.available;
    //le patch permet de modifier une donnée précise, put permet de modifier toutes les données 
    //available passe toujours au contraire d'elle-même soit de true à false
    return this.http.patch("http://localhost:3000/products/"+product.id, {available: !available})
  }

  productsByRange(range: any){
    let min= range.min;
    let max = range.max;
    return this.http.get("http://localhost:3000/products?price_gte="+ min +"&price_lte="+max)
  }

  productsByKeyword(finalKey: any){
    return this.http.get("http://localhost:3000/products?q="+ finalKey)
  }

  updateOneProduct(product: any){
    let available = product.available;
    //le patch permet de modifier une donnée précise, put permet de modifier toutes les données 
    return this.http.put("http://localhost:3000/products/"+product.id, product)
  }
}
