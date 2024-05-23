// src/app/app.component.ts
import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[] = [
    {
      name: 'PS4 - Blue Conroller',
      image: 'assets/Products/1.jpg',
      price: 100,
      description: "300"},
    {
      name: 'Sony Playstation 5 Standard ( 2 Years Warranty From 2B )',
      image: 'assets/Products/2.jpg',
      price: 200,
      description: "400"}
  ];

  onProductAdded(product: Product) {
    this.products.push(product);
  }
}
