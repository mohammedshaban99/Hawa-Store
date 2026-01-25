import { Component, computed, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { ProdcutService } from '../../services/productservice/productservice';
import { Categoryservice } from '../../services/categoryservice/categoryservice';
import { Cartservice } from '../../services/cartservice/cartservice';
import { SpinnerloadingService } from '../../services/spinnerloading/spinnerloadingservice';

@Component({
  selector: 'app-products',
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products  {

  products: IProduct[] = [];
  SelectedCategoryId: number = 0;
  SearchInputValue: string = '';

  constructor(
    private _productService: ProdcutService,
    private _categoryService: Categoryservice,
    private _cartService: Cartservice ,
    private _spinnerLoading:SpinnerloadingService
  ) {}



  filteredproducts = computed(() => {
    this.SelectedCategoryId = this._categoryService.SelectedCategoryId();
    this.SearchInputValue = this._productService.SearchInputValue().toLowerCase();
    this.products = this._productService.products();
    return this.products.filter(product => {
      const matchCategory = this.SelectedCategoryId === 0 || product.CategoryId === this.SelectedCategoryId;
      const matchSearchInput = this.SearchInputValue === '' || product.Name?.toLowerCase().includes(this.SearchInputValue);
      return matchCategory && matchSearchInput;
    });
  });



  AddToCart(product: IProduct) {
    this._cartService.addToCart(product);
  }



}
