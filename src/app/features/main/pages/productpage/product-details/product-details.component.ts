import { Component } from '@angular/core';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { ProductMapComponent } from './product-map/product-map.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ProductMapComponent,ProductSellerComponent, ProductImageComponent, ProductDescriptionComponent, ProductPriceComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

}
