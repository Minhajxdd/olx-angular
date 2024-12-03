import { Component, signal, ViewEncapsulation } from '@angular/core';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LoginProfileComponent } from './login-profile/login-profile.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SubnavbarComponent, LoginModalComponent, LoginProfileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  showLogin = signal(false);

  toggleLogin() {
    this.showLogin.set( !this.showLogin() );
  }
}
