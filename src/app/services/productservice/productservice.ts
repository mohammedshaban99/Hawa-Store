import { Injectable, signal } from '@angular/core';
import { IProduct } from '../../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProdcutService {

  SearchInputValue = signal<string>('');
  products  = signal<IProduct[]>([]);
  private readonly storeproducts:IProduct[]=[];
   constructor() {

    this.storeproducts =[
     {
  Id: 1,
  Name: 'Wireless Mouse',
  Price: 0,
  Quantity: 1000,
  Image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
  CategoryId: 1
},
{
  Id: 2,
  Name: 'Mechanical Keyboard',
  Price: 0,
  Quantity: 1500,
  Image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
  CategoryId: 1
},
{
  Id: 3,
  Name: 'Gaming Headset',
  Price: 950,
  Quantity: 2000,
  Image: 'https://images.unsplash.com/photo-1599669454699-248893623440',
  CategoryId: 1
},
{
  Id: 4,
  Name: 'Smartphone',
  Price: 1000,
  Quantity: 2500,
  Image: 'https://images.pexels.com/photos/6078128/pexels-photo-6078128.jpeg?auto=compress&cs=tinysrgb&w=800',
  CategoryId: 2
},
{
  Id: 5,
  Name: 'Laptop',
  Price: 5000,
  Quantity: 3000,
  Image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
  CategoryId: 2
},
{
  Id: 6,
  Name: 'Smart Watch',
  Price: 2300,
  Quantity: 3500,
  Image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  CategoryId: 3
},
{
  Id: 7,
  Name: 'Bluetooth Speaker',
  Price: 1100,
  Quantity: 4000,
  Image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
  CategoryId: 3
},
{
  Id: 8,
  Name: 'USB-C Charger',
  Price: 350,
  Quantity: 4500,
  Image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6',
  CategoryId: 4
},
{
  Id: 9,
  Name: 'Power Bank 10000mAh',
  Price: 900,
  Quantity: 5000,
  Image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
  CategoryId: 4
},
{
  Id: 10,
  Name: 'Tablet',
  Price: 6200,
  Quantity: 600,
  Image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04',
  CategoryId: 2
},
{
  Id: 11,
  Name: 'Webcam HD 1080p',
  Price: 750,
  Quantity: 1800,
  Image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97',
  CategoryId: 1
},
{
  Id: 12,
  Name: 'External SSD 1TB',
  Price: 1800,
  Quantity: 1200,
  Image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b',
  CategoryId: 4
},
{
  Id: 13,
  Name: 'Wireless Earbuds',
  Price: 1500,
  Quantity: 2800,
  Image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
  CategoryId: 3
},
{
  Id: 14,
  Name: 'Monitor 27 inch 4K',
  Price: 4500,
  Quantity: 850,
  Image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf',
  CategoryId: 1
},
{
  Id: 15,
  Name: 'Graphics Tablet',
  Price: 3200,
  Quantity: 650,
  Image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae',
  CategoryId: 1
},
{
  Id: 16,
  Name: 'Portable SSD 500GB',
  Price: 1200,
  Quantity: 1500,
  Image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58',
  CategoryId: 4
},
{
  Id: 17,
  Name: 'Desk Lamp LED',
  Price: 450,
  Quantity: 2200,
  Image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15',
  CategoryId: 4
},
{
  Id: 18,
  Name: 'Laptop Stand',
  Price: 550,
  Quantity: 1900,
  Image: 'https://images.unsplash.com/photo-1625225233840-695456021cde',
  CategoryId: 4
},
{
  Id: 19,
  Name: 'USB Hub 7-Port',
  Price: 380,
  Quantity: 3200,
  Image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f',
  CategoryId: 4
},
{
  Id: 20,
  Name: 'Noise Cancelling Headphones',
  Price: 2800,
  Quantity: 1100,
  Image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b',
  CategoryId: 3
},
{
  Id: 21,
  Name: 'Ring Light',
  Price: 680,
  Quantity: 1400,
  Image: 'https://images.pexels.com/photos/4553027/pexels-photo-4553027.jpeg?auto=compress&cs=tinysrgb&w=800',
  CategoryId: 4
},
{
  Id: 22,
  Name: 'Microphone USB',
  Price: 1250,
  Quantity: 980,
  Image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc',
  CategoryId: 3
},
{
  Id: 23,
  Name: 'Cable Organizer Set',
  Price: 250,
  Quantity: 4800,
  Image: 'https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=800',
  CategoryId: 4
},
{
  Id: 24,
  Name: 'Smart Home Hub',
  Price: 1900,
  Quantity: 720,
  Image: 'https://images.pexels.com/photos/4315570/pexels-photo-4315570.jpeg?auto=compress&cs=tinysrgb&w=800',
  CategoryId: 3
},
{
  Id: 25,
  Name: 'Wireless Charging Pad',
  Price: 420,
  Quantity: 3600,
  Image: 'https://images.pexels.com/photos/4792486/pexels-photo-4792486.jpeg?auto=compress&cs=tinysrgb&w=800',
  CategoryId: 4
},
{
  Id: 26,
  Name: 'Gaming Mouse Pad',
  Price: 320,
  Quantity: 2900,
  Image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7',
  CategoryId: 1
},
{
  Id: 27,
  Name: 'Screen Protector Pack',
  Price: 180,
  Quantity: 5200,
  Image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb',
  CategoryId: 4
},
{
  Id: 28,
  Name: 'Phone Case Premium',
  Price: 290,
  Quantity: 4200,
  Image: 'https://images.unsplash.com/photo-1601593346740-925612772716',
  CategoryId: 4
},
{
  Id: 29,
  Name: 'VR Headset',
  Price: 3800,
  Quantity: 450,
  Image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac',
  CategoryId: 3
},
{
  Id: 30,
  Name: 'Action Camera 4K',
  Price: 2500,
  Quantity: 880,
  Image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77',
  CategoryId: 2
}

    ]
    this.products.set(this.storeproducts);
  }
}
