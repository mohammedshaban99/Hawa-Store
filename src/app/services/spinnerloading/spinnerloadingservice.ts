import { Injectable } from '@angular/core';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class SpinnerloadingService {

  /**
   *
   */
  constructor(private _spinner:NgxSpinnerService) {

  }

  showSpinner()
  {
    this._spinner.show();
  }

  hideSpinner()
  {
       this._spinner.hide();
  }

}
