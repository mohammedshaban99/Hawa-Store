import { Component, computed } from '@angular/core';
// ...existing code...
import { Categoryservice } from '../../services/categoryservice/categoryservice';
import { Observable } from 'rxjs';
import { ProdcutService } from '../../services/productservice/productservice';
import { RouterLink } from "@angular/router";
import { Cartservice } from '../../services/cartservice/cartservice';
import { compilePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  SelectedCategory:string='';
  SearchInputValue:string='';
  islogin:boolean=true;

  constructor(private _categoryService:Categoryservice,
              private _productService:ProdcutService ,
              private _cartService:Cartservice
  ) {
  }
  categories = computed(() => this._categoryService.categories());
   totalItems = computed(()=>this._cartService.totalItems())



  OnCategoryChange(event:Event)
  {
     this.SelectedCategory=(event.target as HTMLSelectElement).value;
     this._categoryService.SelectedCategory.set(this.SelectedCategory);
  }

 OnSearchInputChange(event:Event)
 {
    this.SearchInputValue= (event.target as HTMLSelectElement).value;
    this._productService.SearchInputValue.set(this.SearchInputValue);
 }

   openCart(){
    this._cartService.openCart();
 }

}
