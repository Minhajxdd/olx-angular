import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductServices } from '../../../../../shared/services/products.service';
import { Product } from '../../../../../shared/models/product.model';

@Component({
  selector: 'app-fresh-recommendations',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './fresh-recommendations.component.html',
  styleUrl: './fresh-recommendations.component.css'
})
export class FreshRecommendationsComponent implements OnInit {
  private productServices = inject(ProductServices);
  private destroyRef = inject(DestroyRef);

  products = signal<Product[] | undefined>(undefined);

  loadMore = signal(false);
  loadMoreText = signal('Load More');

  ngOnInit(): void {
    const subscription = this.productServices
      .fetchProducts()
      .subscribe({
        next: (products: Product[]) => {
          this.products.set(products);
        },
        error: (err: Error) => {
          console.log(err.message);
        }
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  };

  onLoadMore() {
    this.loadMore.set(!this.loadMore());
    if (!this.loadMore()) this.loadMoreText.set('Load More');
    else this.loadMoreText.set('Show Less')

  }


};
