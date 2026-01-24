import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { Content } from "./components/content/content";
import { Header } from "./components/header/header";
import { Cart } from "./components/cart/cart";
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerloadingService } from './services/spinnerloading/spinnerloadingservice';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer, Content, Header, Cart,NgxSpinnerModule  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App  implements OnInit  {
  /**
   *
   */
  constructor(private _spinner:SpinnerloadingService) {

  }

   ngOnInit()
   {
        this._spinner.showSpinner();
        setTimeout(()=>{
          this._spinner.hideSpinner();
        },5000)
   }
}

