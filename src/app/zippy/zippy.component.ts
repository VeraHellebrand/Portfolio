import { Component, Input } from '@angular/core';
import { expandCollapse } from './zippy.component.animations';

@Component({
  selector: 'app-zippy',
  standalone: true,
  imports: [],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css',
  animations: [ expandCollapse ]
})
export class ZippyComponent {
  @Input('title') title:string = "";
  isExpanded: boolean = false;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }
}
