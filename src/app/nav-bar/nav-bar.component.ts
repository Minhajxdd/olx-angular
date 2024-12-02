import { Component, signal, ViewEncapsulation } from '@angular/core';
import { CountryDropDownComponent } from './country-drop-down/country-drop-down.component';
import { ProfileDropDownComponent } from './profile-drop-down/profile-drop-down.component';
import { LanguagesDropDownComponent } from "./languages-drop-down/languages-drop-down.component";
import { NavBottomComponent } from "./nav-bottom/nav-bottom.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CountryDropDownComponent, ProfileDropDownComponent, LanguagesDropDownComponent, NavBottomComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
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
