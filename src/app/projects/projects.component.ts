import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import data from "../../assets/data/projects.json";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  data: any[] = [];
  constructor() {
    this.data = data;
  }
}
