import { Roles } from './../../enums/roles';
import { Component } from '@angular/core';
import { Products } from "../products/products";

@Component({
  selector: 'app-allproducts',
  imports: [Products],
  templateUrl: './allproducts.html',
  styleUrl: './allproducts.css',
})
export class Allproducts {
   role:Roles=Roles.admin;
}
