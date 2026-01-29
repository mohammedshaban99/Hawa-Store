import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BaseUrl } from '../../api.constants';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class Userservice {

   constructor(private _httpClient:HttpClient) {

   }

  getAllUsers(): Observable<IUser[]> {
  return this._httpClient.get<IUser[]>(`${BaseUrl}/users`)
    .pipe(
      catchError(err => {
        return throwError(() => err);
      })
    );
}

}
