import { Component } from '@angular/core';
import { Ad1Component } from "./ad-1/ad-1.component";
import { RecommendationContainerComponent } from './recommendation-container/recommendation-container.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Ad1Component, RecommendationContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
