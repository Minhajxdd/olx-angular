import { Component, signal } from '@angular/core';
import { CountryDropDownComponent } from './country-drop-down/country-drop-down.component';
import { ProfileDropDownComponent } from './profile-drop-down/profile-drop-down.component';
import { LanguagesDropDownComponent } from "./languages-drop-down/languages-drop-down.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CountryDropDownComponent, ProfileDropDownComponent, LanguagesDropDownComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showCountries = signal(false);
  showProfile = signal(false);
  showLanguages = signal(false);

  toggleCountries() {
    this.showCountries.set(!this.showCountries());
  }
  toggleProfile() {
    this.showProfile.set(!this.showProfile());
  }
  toggleLanguages() {
    this.showLanguages.set(!this.showLanguages());
  }
}
