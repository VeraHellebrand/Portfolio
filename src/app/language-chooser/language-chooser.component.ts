import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-language-chooser',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './language-chooser.component.html',
  styleUrl: './language-chooser.component.css'
})
export class LanguageChooserComponent {
  currentLang:string = "cs";

  constructor(private languageService: LanguageService) {
    languageService.switchLanguage('cs');
    this.currentLang = languageService.getCurrentLanguage();
  }

  switchLanguage() {
    const nextLang = this.currentLang === "en"? "cs" : "en";
    this.languageService.switchLanguage(nextLang);
    this.currentLang= this.languageService.getCurrentLanguage();
  }
}
