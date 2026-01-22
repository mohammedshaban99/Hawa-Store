import { Injectable, signal } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProdcutService } from '../productservice/productservice';

@Injectable({
  providedIn: 'root',
})
export class Cartservice {


    /**
     *
     */
    constructor(private _productService:ProdcutService) {

    }

   products = signal<IProduct[]>([]);
  cartIsOpen= signal<boolean>(false);

  addToCart(product: IProduct) {


      // first check if item exist nothing if not exist add it to  cart list
       const exists = this.products().some(item => item.Id === product.Id);
    if (!exists) {
      this.products.update(items => [...items, product]);
       // second update products list with new products
    this._productService.products.update(products=>
    products.map(prod=>
      prod.Id===product.Id ?{...prod, Quantity:prod.Quantity-1} :prod ));
    }
  }

  removeFromCart(productId: number) {
    this.products.update(items =>
      items.filter(item => item.Id !== productId)
    );
  }

  clearCart() {
    this.products.set([]);
  }

  openCart()
  {
   this.cartIsOpen.set(true);
  }
  closeCart()
  {
   this.cartIsOpen.set(false);
  }

  cartCount()
  {
   return this.products().length;
  }
}
