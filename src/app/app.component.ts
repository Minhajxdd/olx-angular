import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NavBottomComponent } from "./nav-bar/nav-bottom/nav-bottom.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, HomePageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
