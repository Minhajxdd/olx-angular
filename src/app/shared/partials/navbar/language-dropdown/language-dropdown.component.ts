import { Component, output } from '@angular/core';

@Component({
  selector: 'app-language-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './language-dropdown.component.html',
  styleUrl: './language-dropdown.component.css'
})
export class LanguageDropdownComponent {
  output = output<string>();

  outputLanguage(language: string) {
    this.output.emit(language);
  }
}
