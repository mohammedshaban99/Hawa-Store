import { Component } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { Content } from "./components/content/content";
import { Header } from "./components/header/header";
import { Cart } from "./components/cart/cart";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer, Content, Header, Cart ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App   {

  /**
   *
   */
}

