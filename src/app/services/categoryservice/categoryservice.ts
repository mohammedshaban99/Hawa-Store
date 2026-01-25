import { Injectable, signal } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { map, Observable, single } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SpinnerloadingService } from '../spinnerloading/spinnerloadingservice';
import { BaseUrl } from '../../api.constants';

@Injectable({
  providedIn: 'root',
})
export class Categoryservice {
  categories:ICategory[]=[];
  SelectedCategoryId = signal<number>(0);
  /**
   *
   */
  constructor( private _httpClient:HttpClient,private _spinnerLoading:SpinnerloadingService) {

      this._spinnerLoading.showSpinner();
      this.getAllCategories().subscribe({

        next:(result)=>{
         this.categories=result;
           setTimeout(() => {
           this._spinnerLoading.hideSpinner();
         }, 5000)
        },
        error:(error)=>{
          console.log(error);
         setTimeout(() => {
        this._spinnerLoading.hideSpinner();
         }, 5000)
        }
      });

   }
         getAllCategories(): Observable<ICategory[]> {
        return this._httpClient.get<any[]>(`${BaseUrl}/categories`).pipe(
          map((categories: any[]) =>
            categories.map(category => ({
              Id: category.id,
              Name: category.name
            }))
          )
        );
          }



  }
