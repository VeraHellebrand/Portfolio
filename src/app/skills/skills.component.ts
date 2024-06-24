import { Component } from '@angular/core';
import inData from "../../assets/data/skills.json";
import { ArrayDataSource } from '@angular/cdk/collections';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  data: any[]=[];
  constructor() {
    this.data=inData;
  }
}
