import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { LanguageChooserComponent } from '../language-chooser/language-chooser.component';
import { fade, slideL, slideR } from '../effects/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    TranslateModule,
    LanguageChooserComponent,
  ],
  animations: [
    fade,
    slideL,
    slideR
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private languageService: LanguageService) { }
  switchLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
  }

  neco() {
    console.log('neco');
  }
}
