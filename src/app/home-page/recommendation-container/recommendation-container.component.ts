import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ProductServices } from './product.services';
import { Products } from './products.model';
import { ProductsComponent } from "./products/products.component";

@Component({
  selector: 'app-recommendation-container',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './recommendation-container.component.html',
  styleUrl: './recommendation-container.component.css'
})
export class RecommendationContainerComponent implements OnInit {
  private productServices = inject(ProductServices);
  private destroyRef = inject(DestroyRef);

  products = signal<Products[] | undefined>(undefined);

  ngOnInit(): void {
      const subscription = this.productServices
      .fetchProducts()
      .subscribe({
        next: (products: any) => {
          this.products.set(products);
        },
        error: (error: Error)  => {
          console.log(error);
        }
      });

      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      })

  }


}
