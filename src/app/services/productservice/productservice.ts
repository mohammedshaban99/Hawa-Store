import { Injectable, OnInit, signal } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '../../api.constants';
import { map, Observable } from 'rxjs';
import { SpinnerloadingService } from '../spinnerloading/spinnerloadingservice';

@Injectable({
  providedIn: 'root',
})
export class ProdcutService{

  SearchInputValue = signal<string>('');
  products  = signal<IProduct[]>([]);


   constructor( private _httpClient:HttpClient,private _spinnerLoading:SpinnerloadingService)
    {
        this._spinnerLoading.showSpinner();
        this.getAllProducts().subscribe({
        next:(result)=>{
        this.products.set(result);
        setTimeout(() => {
        this._spinnerLoading.hideSpinner();
         }, 5000);
        },
        error:(error)=>{
        console.log(error);
        setTimeout(() => {
        this._spinnerLoading.hideSpinner();
         }, 5000);
        }
      });
    }



   getAllProducts(): Observable<IProduct[]> {
    return this._httpClient.get<any[]>(`${BaseUrl}/products`).pipe(
      map(products => products.map(p => ({
        Id: p.id,
        Name: p.title,
        Price: p.price,
        Quantity: 2000, // default quantity
        Image: p.images[0], // take first image
        CategoryId: p.category.id
      })))
    );
  }


}
