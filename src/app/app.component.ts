import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from './header/header.component';
import { LanguageService } from './services/language.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';
import * as $ from 'jquery';
import 'jquery-scrollify'; // Importujte jquery-scrollify

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    NavbarComponent,
    SkillsComponent,
    HobbiesComponent,
    ContactComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';


  ngAfterViewInit() {
    ($ as any).scrollify({
      section: ".section",
      scrollSpeed: 1100,
      interstitialSection: ".footer",
    });
  }

  constructor(private themeService: ThemeService, private languageService: LanguageService) {

  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
