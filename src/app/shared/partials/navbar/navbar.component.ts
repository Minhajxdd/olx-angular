import { Component, ViewEncapsulation } from '@angular/core';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SubnavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

}
