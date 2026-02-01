import { Component, computed, Input, input, inputBinding, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { ProdcutService } from '../../services/productservice/productservice';
import { Categoryservice } from '../../services/categoryservice/categoryservice';
import { Cartservice } from '../../services/cartservice/cartservice';
import { SpinnerloadingService } from '../../services/spinnerloading/spinnerloadingservice';
import { Roles } from '../../enums/roles';

@Component({
  selector: 'app-products',
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products  {

 @Input() role:Roles=Roles.customer;
  Roles = Roles;
  products: IProduct[] = [];
  SelectedCategory: string = '';
  SearchInputValue: string = '';

  constructor(
    private _productService: ProdcutService,
    private _categoryService: Categoryservice,
    private _cartService: Cartservice ,
    private _spinnerLoading:SpinnerloadingService
  ) {}



  filteredproducts = computed(() => {
    this.SelectedCategory = this._categoryService.SelectedCategory();
    this.SearchInputValue = this._productService.SearchInputValue().toLowerCase();
    this.products = this._productService.products();
    return this.products.filter(product => {
      const matchCategory = this.SelectedCategory === '' || product.category === this.SelectedCategory;
      const matchSearchInput = this.SearchInputValue === '' || product.Name?.toLowerCase().includes(this.SearchInputValue);
      return matchCategory && matchSearchInput;
    });
  });



  AddToCart(product: IProduct) {
    this._cartService.addToCart(product);
  }



}
