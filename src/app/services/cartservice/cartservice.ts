import { Injectable, signal, computed } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProdcutService } from '../productservice/productservice';

interface ICartItem {
  product: IProduct;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class Cartservice {
  constructor(private _productService: ProdcutService) {}

  products = signal<ICartItem[]>([]);
  cartIsOpen = signal<boolean>(false);

  totalItems = computed(() => {
    return this.products().reduce((sum, item) => sum + item.quantity, 0);
  });

  addToCart(product: IProduct) {
    const existsIndex = this.products().findIndex(item => item.product.Id === product.Id);
    if (existsIndex === -1 && product.Quantity > 0) {
      this.products.update(items => [...items, { product, quantity: 1 }]);
      this._productService.products.update(products =>
        products.map(prod =>
          prod.Id === product.Id ? { ...prod, Quantity: prod.Quantity - 1 } : prod
        )
      );
    } else if (existsIndex !== -1 && product.Quantity > 0) {
      this.products.update(items =>
        items.map((item, index) =>
          index === existsIndex ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      this._productService.products.update(products =>
        products.map(prod =>
          prod.Id === product.Id ? { ...prod, Quantity: prod.Quantity - 1 } : prod
        )
      );
    }
  }

  removeFromCart(productId: number) {
    const itemToRemove = this.products().find(item => item.product.Id === productId);
    if (itemToRemove) {
      this._productService.products.update(products =>
        products.map(prod =>
          prod.Id === productId ? { ...prod, Quantity: prod.Quantity + itemToRemove.quantity } : prod
        )
      );
    }
    this.products.update(items => items.filter(item => item.product.Id !== productId));
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

}
