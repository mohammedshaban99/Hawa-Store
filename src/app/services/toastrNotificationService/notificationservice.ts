import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class Notificationservice {

    private defaultConfig: Partial<IndividualConfig> = {
    timeOut: 3000,
    closeButton: true,
    progressBar: true,
    tapToDismiss: true,
    positionClass: 'toast-top-right'
  };

  constructor(private _toastrService:ToastrService) {

  }

    success(message: string, title = 'Success') {
    this._toastrService.success(message, title, this.defaultConfig);
  }

  error(message: string, title = 'Error') {
    this._toastrService.error(message, title, {
      ...this.defaultConfig,
      timeOut: 5000
    });
  }

  warning(message: string, title = 'Warning') {
    this._toastrService.warning(message, title, this.defaultConfig);
  }

  info(message: string, title = 'Info') {
    this._toastrService.info(message, title, this.defaultConfig);
  }

}
