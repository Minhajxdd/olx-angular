import { Component, signal } from '@angular/core';
import { CountryDropDownComponent } from './country-drop-down/country-drop-down.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CountryDropDownComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showDropDown = signal(false);


  toggleDrop() {
    this.showDropDown.set(!this.showDropDown());
  }
}
