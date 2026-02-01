import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notificationservice } from '../toastrNotificationService/notificationservice';
import { Observable } from 'rxjs';
import { ILoginResponse } from '../../models/iloginresponse';
import { ILogin } from '../../models/ilogin';
import { BaseUrl } from '../../api.constants';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
   /**
    *
    */
   constructor(private _httpClient:HttpClient,
               private _notificationService:Notificationservice) {
   }

   login(login:ILogin):Observable<ILoginResponse>{
        return this._httpClient.post<any>(`${BaseUrl}/auth/login`,login);
   }


}
