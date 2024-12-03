declare var google: any;

import { Component, inject, OnInit, output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent implements OnInit {
  close = output<void>();

  private router = inject(Router);
  private dataService = inject(DataService);

  onClose() {
    this.close.emit();
  }

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '137833444543-cfdelosuq0llrqo8sps3ef4khrn58jd7.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp)
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 332
    });

  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any) {
    if (response) {
      //decode the token
      const payLoad = this.decodeToken(response.credential);
      //store in session
      sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
      // emitting
      this.dataService.changeMessage(payLoad);
      //navigate to home/browse
      this.router.navigate(['']);
      // closing modal
      this.onClose();
    }
  }

}
