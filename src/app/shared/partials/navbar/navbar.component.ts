import { Component, signal, ViewEncapsulation } from '@angular/core';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LoginProfileComponent } from './login-profile/login-profile.component';
import { RouterLink } from '@angular/router';
import { LocationDropDownComponent } from './location-drop-down/location-drop-down.component';
import { LanguageDropdownComponent } from './language-dropdown/language-dropdown.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LanguageDropdownComponent, LocationDropDownComponent, SubnavbarComponent, LoginModalComponent, LoginProfileComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  locationText = signal<string>('Location');
  languageText = signal<string>('English');

  showLogin = signal(false);
  showLocation = signal(false);
  showLanguage = signal(false);

  toggleLocation() {
    this.showLocation.set(!this.showLocation());
  }

  toggleLogin() {
    this.showLogin.set( !this.showLogin() );
  }

  toggleLanguage() {
    this.showLanguage.set(!this.showLanguage());
  }

  changeLocation(location: string) {
    this.locationText.set(location);
  }

  changeLangauge(langauge: string) {
    this.languageText.set(langauge);
  }
}
