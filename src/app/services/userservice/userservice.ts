import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BaseUrl, BaseUsersUrl } from '../../api.constants';
import { catchError, Observable, of, throwError } from 'rxjs';
import { IUser } from '../../models/iuser';
import { Notificationservice } from '../toastrNotificationService/notificationservice';

@Injectable({
  providedIn: 'root',
})
export class Userservice {

   constructor(private _httpClient:HttpClient,
               private _notificationService:Notificationservice
   ) {

   }

  getAllUsers(): Observable<IUser[]> {
  return this._httpClient.get<IUser[]>(`${BaseUrl}/users`)
    .pipe(
      catchError(err => {
        return throwError(() => err);
      })
    );
    }
  getUserById(id: number): Observable<IUser | null> {
  return this._httpClient
    .get<IUser>(`${BaseUsersUrl}/users/${id}`)
    .pipe(
      catchError(err => {
        if (err.status === 404) {
          this._notificationService.warning(`User not found with this id ${id}`);
          return of(null);
        }
        return throwError(() => err);
      })
    );
   }


   adduser(user:IUser):Observable<IUser>{
    return this._httpClient.post<IUser>(`${BaseUsersUrl}/users`,user);
   }


}



