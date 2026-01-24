import { Component, computed } from '@angular/core';
import { Cartservice } from '../../services/cartservice/cartservice';
import { IProduct } from '../../models/iproduct';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProdcutService } from '../../services/productservice/productservice';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  shippingPrice: number = 200;

  constructor(private _cartService: Cartservice, private _productService: ProdcutService) {}

  cartitems = computed(() => {
    return this._cartService.products();
  });

  cartIsOpen = computed(() => {
    return this._cartService.cartIsOpen();
  });

  totalItems = computed(() => {
    return this._cartService.totalItems();
  });

  colseCart() {
    this._cartService.closeCart();
  }

  getSubTotal(): number {
    return this.cartitems().reduce((sum, item) => sum + item.quantity * item.product.Price, 0);
  }

  getTotal(): number {
    return this.getSubTotal() + this.shippingPrice;
  }

  decrementQuantity(index: number) {
    const item = this.cartitems()[index];
    if (item.quantity > 1) {
      this._cartService.products.update(items =>
        items.map((cartItem, i) =>
          i === index ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
      this._productService.products.update(products =>
        products.map(prod =>
          prod.Id === item.product.Id ? { ...prod, Quantity: prod.Quantity + 1 } : prod
        )
      );
    } else {
      this.removeProdcutFromCart(item.product);
    }
  }

  incrementQuantity(index: number) {
    const item = this.cartitems()[index];
    if (item.product.Quantity > 0) {
      this._cartService.products.update(items =>
        items.map((cartItem, i) =>
          i === index ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
      this._productService.products.update(products =>
        products.map(prod =>
          prod.Id === item.product.Id ? { ...prod, Quantity: prod.Quantity - 1 } : prod
        )
      );
    }
  }

  removeProdcutFromCart(product: IProduct) {
    this._cartService.removeFromCart(product.Id);
  }
}
