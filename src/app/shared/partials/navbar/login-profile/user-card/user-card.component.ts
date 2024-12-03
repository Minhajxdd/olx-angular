import { Component, inject, input, output, Signal } from '@angular/core';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  name = input.required<any>();
  email = input.required<any>();
  userProfileImg = input.required<any>();
  logout = output<void>();

  private authService = inject(AuthService);


  onlogout() {
    this.authService.signOut();
    this.logout.emit();
  }
}
