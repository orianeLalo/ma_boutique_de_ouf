import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "oriane";
  password = "coucou";
  message = false;

  constructor(private router:Router, private ps:ProduitsService ) { }

  ngOnInit(): void {
  }

  login(loginForm:any){
    if (loginForm.value.username == this.username && loginForm.value.password == this.password){
      this.router.navigate(["products"]);
      this.ps.isconnected = true;
    } else {
      this.message = true;
    }
  }

}
