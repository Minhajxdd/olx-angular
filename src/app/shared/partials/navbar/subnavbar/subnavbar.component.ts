import { Component, signal } from '@angular/core';
import { SubmenuComponent } from './submenu/submenu.component';

@Component({
  selector: 'app-subnavbar',
  standalone: true,
  imports: [SubmenuComponent],
  templateUrl: './subnavbar.component.html',
  styleUrl: './subnavbar.component.css'
})
export class SubnavbarComponent {
  showSubMenu = signal(false);

  toggleMenu() {
    this.showSubMenu.set(!this.showSubMenu());
  }
}
