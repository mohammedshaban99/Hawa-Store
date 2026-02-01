import { Roles } from './../../enums/roles';
import { Component } from '@angular/core';
import { Products } from "../products/products";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-allproducts',
  imports: [Products, Header, Footer],
  templateUrl: './allproducts.html',
  styleUrl: './allproducts.css',
})
export class Allproducts {
   role:Roles=Roles.admin;
}
