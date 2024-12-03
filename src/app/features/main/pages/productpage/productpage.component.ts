import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../shared/partials/navbar/navbar.component";
import { FooterComponent } from "../../../../shared/partials/footer/footer.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@Component({
  selector: 'app-productpage',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ProductDetailsComponent],
  templateUrl: './productpage.component.html',
  styleUrl: './productpage.component.css'
})
export class ProductpageComponent {

}
