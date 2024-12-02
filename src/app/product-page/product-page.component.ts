import { Component } from '@angular/core';
import { DetailsComponent } from "./details/details.component";
import { Box1Component } from "./box-1/box-1.component";
import { Box2Component } from "./box-2/box-2.component";
import { Box3Component } from "./box-3/box-3.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [DetailsComponent, Box1Component, Box2Component, Box3Component],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

}
