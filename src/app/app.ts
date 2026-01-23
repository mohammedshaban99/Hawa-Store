import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { Content } from "./components/content/content";
import { Header } from "./components/header/header";
import { Cart } from "./components/cart/cart";
import { SpinnerloadingService } from './services/spinnerloading/spinnerloading';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer, Content, Header, Cart ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App   {

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
    },3000)
  }
}

