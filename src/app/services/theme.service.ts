import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = true;

  toggleTheme() : void {
    this.isDarkTheme = !this.isDarkTheme;
    const bodyClassLIst = document.body.classList;
    if (this.isDarkTheme) {
      bodyClassLIst.add('dark-theme');
      bodyClassLIst.remove('light-theme');
    }
    else
    {
      bodyClassLIst.add('light-theme');
      bodyClassLIst.remove('dark-theme');
    }
  }
  isDarkThemeEnabled() :boolean {
    return this.isDarkTheme;
  }

  constructor() { }
}
