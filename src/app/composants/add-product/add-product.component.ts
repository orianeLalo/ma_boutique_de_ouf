import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService : ProduitsService) {}

  ngOnInit(): void {
  }

  //méthode pour enregistrer un produit 
  save_product(produit:any){
    let data = produit.value;
    this.productService.addNewProduct(data).subscribe(() =>{
      console.log('saved success')
    });
  }

}
