import { Injectable, signal } from '@angular/core';
import { map, Observable, single } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SpinnerloadingService } from '../spinnerloading/spinnerloadingservice';
import { BaseUrl } from '../../api.constants';
import { IProduct } from '../../models/iproduct';
import { Notificationservice } from '../toastrNotificationService/notificationservice';

@Injectable({
  providedIn: 'root',
})
export class Categoryservice {
  categories = signal<string[]>([]);
  SelectedCategory = signal<string>('');

  constructor( private _httpClient:HttpClient,private _spinnerLoading:SpinnerloadingService,
              private _notificationService:Notificationservice
  ) {

      this._spinnerLoading.showSpinner();
      this.getAllCategories().subscribe({

        next:(result)=>{
         this.categories.set(result);
           this._spinnerLoading.hideSpinner();
        this._notificationService.success("load categories success","sucess")

        },
        error:(error)=>{
          console.log(error);
        this._spinnerLoading.hideSpinner();
       this._notificationService.error("load categories failed","error")
        }
      });

   }
       getAllCategories(): Observable<string[]> {
        return this._httpClient.get<any[]>(`${BaseUrl}/products`).pipe(
          map(products => products.map(p => p.category))
        );
      }


  }
