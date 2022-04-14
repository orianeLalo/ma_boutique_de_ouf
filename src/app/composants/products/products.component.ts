import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  afficher: boolean=false;

  constructor(private productService : ProduitsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProduits().subscribe(data=>{
      this.products = data;
      console.log(this.products)
    })
  }

  supprimer(id:any){
    this.productService.deleteProduit(id).subscribe(data=> {
      this.getProducts();
      //permet d'afficher le message de suppression
      this.afficher=true;
    });  
  }

  disponible(product: any){
    this.productService.changeAvailability(product).subscribe(()=>{
      this.getProducts();
      console.log("change ok")
    })
  }

  range(formRange: any){
    let range = formRange.value;
    this.productService.productsByRange(range).subscribe(data =>{
      this.products = data;
    })
  }

}
