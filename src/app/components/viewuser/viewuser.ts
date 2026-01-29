import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../models/iuser';
import { Userservice } from '../../services/userservice/userservice';
import { SpinnerloadingService } from '../../services/spinnerloading/spinnerloadingservice';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-viewuser',
  imports: [AsyncPipe],
  templateUrl: './viewuser.html',
  styleUrl: './viewuser.css',
})
export class Viewuser implements OnInit {

  user$!:Observable<IUser | null>;
  /**
   *
   */
  constructor(private _userService:Userservice,
             private  _spinnerLoading:SpinnerloadingService,
             private _route:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
   const id = Number(this._route.snapshot.paramMap.get('id'));
   this._spinnerLoading.showSpinner();
   this.user$=this._userService.getUserById(id);
   this._spinnerLoading.hideSpinner();
  }



}
