import { Component, OnInit } from '@angular/core';
import { Userservice } from '../../services/userservice/userservice';
import { finalize, Observable } from 'rxjs';
import { IUser } from '../../models/iuser';
import { Notificationservice } from '../../services/toastrNotificationService/notificationservice';
import { SpinnerloadingService } from '../../services/spinnerloading/spinnerloadingservice';
import { flush } from '@angular/core/testing';
import { AsyncPipe, CommonModule, UpperCasePipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-users',
  imports: [AsyncPipe, CommonModule, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users  implements OnInit{



  users$!: Observable<IUser[]>;

  constructor(private _userService:Userservice,
    private _spinnerLoading:SpinnerloadingService) {
  }


  ngOnInit(): void {
   this._spinnerLoading.showSpinner();
   this.users$= this._userService.getAllUsers().pipe(
    finalize(()=> this._spinnerLoading.hideSpinner())
   );
  }



}
