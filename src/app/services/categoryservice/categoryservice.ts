import { Injectable, signal } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { Observable, single } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Categoryservice {
  categories:ICategory[];
  SelectedCategoryId = signal<number>(0);
  /**
   *
   */
  constructor() {
  this.categories=[
 {
    Id: 1,
    Name: 'Computer Accessories'
  },
  {
    Id: 2,
    Name: 'Mobile Devices'
  },
  {
    Id: 3,
    Name: 'Audio & Wearables'
  },
  {
    Id: 4,
    Name: 'Chargers & Power'
  }

  ]
  }




   }


