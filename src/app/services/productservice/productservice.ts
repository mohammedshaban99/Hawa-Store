import { Injectable, OnInit, signal } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '../../api.constants';
import { map, Observable } from 'rxjs';
import { SpinnerloadingService } from '../spinnerloading/spinnerloadingservice';
import { Notificationservice } from '../toastrNotificationService/notificationservice';

@Injectable({
  providedIn: 'root',
})
export class ProdcutService{

  SearchInputValue = signal<string>('');
  products  = signal<IProduct[]>([]);


   constructor( private _httpClient:HttpClient,private _spinnerLoading:SpinnerloadingService,
                private _notificationService:Notificationservice
   )
    {
        this._spinnerLoading.showSpinner();
        this.getAllProducts().subscribe({
        next:(result)=>{
        this.products.set(result);
        this._spinnerLoading.hideSpinner();
        this._notificationService.success("load products success","sucess")

        },
        error:(error)=>{
        this._spinnerLoading.hideSpinner();
       this._notificationService.error("load products failed","error")
        }
      });
    }



   getAllProducts(): Observable<IProduct[]> {
    return this._httpClient.get<any[]>(`${BaseUrl}/products`).pipe(
      map(products => products.map(p => ({
        Id: p.id,
        Name: p.title,
        Price: p.price,
        Quantity: 2000,
        Image: p.image,
        category: p.category
      })))
    );
  }


}
