import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { Content } from "./components/content/content";
import { Header } from "./components/header/header";
import { Cart } from "./components/cart/cart";
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerloadingService } from './services/spinnerloading/spinnerloadingservice';
import { Router, RouterModule, RouterOutlet, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxSpinnerModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App    {
  /**
   *
   */
  constructor() {

  }


}

