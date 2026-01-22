import { Component, computed } from '@angular/core';
import { Cartservice } from '../../services/cartservice/cartservice';
import { IProduct } from '../../models/iproduct';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  shippingPrice: number = 200;

  constructor(private _cartService: Cartservice) {}

  cartitems = computed(() => {
    return this._cartService.products();
  });

  cartIsOpen = computed(() => {
    return this._cartService.cartIsOpen();
  });

  colseCart() {
    this._cartService.closeCart();
  }

  getSubTotal(): number {
    let subTotal = 0;
    this.cartitems().forEach((item) => {
      subTotal = subTotal + item.Quantity * item.Price;
    });
    return subTotal;
  }

  getTotal(): number {
    return this.getSubTotal() * this.shippingPrice;
  }

  decrementProductQuantity(productId: number) {
    console.log('decrementProductQuantity');
  }
  incrementProductQuantity(productId: number) {
    console.log('incrementProductQuantity');
  }
  removeProdcutFromCart(productId: number) {
    console.log('removeProdcutFromCart');
  }
}
