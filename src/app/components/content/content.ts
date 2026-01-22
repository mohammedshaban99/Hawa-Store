import { Component } from '@angular/core';
import { Products } from "../products/products";

@Component({
  selector: 'app-content',
  imports: [Products],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {

}
