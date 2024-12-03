import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/partials/navbar/navbar.component';
import { OlxautosBannerComponent } from '../../../../shared/partials/olxautos-banner/olxautos-banner.component';
import { FreshRecommendationsComponent } from './fresh-recommendations/fresh-recommendations.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, OlxautosBannerComponent, FreshRecommendationsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
