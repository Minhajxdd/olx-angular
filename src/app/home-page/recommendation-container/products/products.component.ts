import { Component, input } from '@angular/core';
import { Products } from '../products.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  product = input.required<Products>();
}
