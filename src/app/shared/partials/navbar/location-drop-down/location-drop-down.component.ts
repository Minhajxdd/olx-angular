import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-location-drop-down',
  standalone: true,
  imports: [],
  templateUrl: './location-drop-down.component.html',
  styleUrl: './location-drop-down.component.css'
})
export class LocationDropDownComponent {
  location = output<string>();

  onLocationChange(location: string) {
    this.location.emit(location);
  }
}
