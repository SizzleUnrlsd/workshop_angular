import { Component, Input } from '@angular/core';
import { products } from '../products/products';

@Component({
  selector: 'app-product-displayer',
  templateUrl: './product-displayer.component.html',
  styleUrls: ['./product-displayer.component.css']
})
export class ProductDisplayerComponent {
  @Input() products! : products[];
}
