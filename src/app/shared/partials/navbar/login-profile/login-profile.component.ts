import { Component, DestroyRef, inject, OnInit, output, signal } from '@angular/core';

import { DataService } from '../data.service';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-login-profile',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './login-profile.component.html',
  styleUrl: './login-profile.component.css'
})
export class LoginProfileComponent implements OnInit {
  close = output<void>();

  private dataService = inject(DataService);
  private destoryRef = inject(DestroyRef);

  name = signal<string | undefined>(undefined);
  userProfileImg = signal<string | undefined>(undefined);
  email = signal<string | undefined>(undefined);

  toggleUserCard = signal<boolean>(false);

  getLocalData() {
    this.name.set(JSON.parse(sessionStorage.getItem("loggedInUser")!)?.name);
    this.userProfileImg.set(JSON.parse(sessionStorage.getItem("loggedInUser")!).picture);
    this.email.set(JSON.parse(sessionStorage.getItem("loggedInUser")!).email);
  }

  ngOnInit() {

    const subscriber = this.dataService.currentMessage.subscribe({
      next: (data) => {
        this.getLocalData();
      },
      error: (error: Error) => {
        console.log(error.message);
      }
    });

    this.getLocalData();

    this.destoryRef.onDestroy(() => {
      subscriber.unsubscribe();
    })

  }

  toggleLogin() {
    this.close.emit();
  }

  onToggleUser() {
    this.toggleUserCard.set( !this.toggleUserCard() );
  }
}
