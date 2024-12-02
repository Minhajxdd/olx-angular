import { Component } from '@angular/core';
import { TryOlxComponent } from "./try-olx/try-olx.component";
import { MainFooterComponent } from "./main-footer/main-footer.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TryOlxComponent, MainFooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
