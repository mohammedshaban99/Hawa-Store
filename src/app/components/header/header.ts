import { Component, computed } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { Categoryservice } from '../../services/categoryservice/categoryservice';
import { Observable } from 'rxjs';
import { ProdcutService } from '../../services/productservice/productservice';
import { RouterLink } from "@angular/router";
import { Cartservice } from '../../services/cartservice/cartservice';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  categories:ICategory[];
  SelectedCategoryId:number;
  SearchInputValue:string='';
  islogin:boolean=true;

  constructor(private _categoryService:Categoryservice,
              private _productService:ProdcutService ,
              private _cartService:Cartservice
  ) {
   this.categories=_categoryService.categories;
   this.SelectedCategoryId=0;
  }

  OnCategoryChange(event:Event)
  {
     this.SelectedCategoryId=Number((event.target as HTMLSelectElement).value);
     this._categoryService.SelectedCategoryId.set(this.SelectedCategoryId);
  }

 OnSearchInputChange(event:Event)
 {
    this.SearchInputValue= (event.target as HTMLSelectElement).value;
    this._productService.SearchInputValue.set(this.SearchInputValue);
 }

   openCart(){
    this._cartService.openCart();
 }
    cartCount = computed(()=>{
      return this._cartService.cartCount();
    })
}
