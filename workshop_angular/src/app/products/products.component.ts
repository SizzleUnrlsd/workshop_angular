import { Component } from '@angular/core';
import { products } from './products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products : products[] = [
    {name : "chaises", price : 10, stock : 4},
    {name : "table", price : 100, "stock" : 1},
    {name : "yacht", price : 1, "stock" : 0}  
  ];
} 
