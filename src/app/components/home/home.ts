import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Content } from '../content/content';
import { Footer } from '../footer/footer';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-home',
  imports: [Footer, Content, Header,Cart],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
