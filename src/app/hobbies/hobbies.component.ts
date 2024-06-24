import { Component, OnInit } from '@angular/core';
import { ZippyComponent } from '../zippy/zippy.component';
import { CarouselModule } from '@coreui/angular';
import { CarouselComponent } from '../carousel/carousel.component';


@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [
    ZippyComponent,
    CarouselModule,
    CarouselComponent
  ],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent implements OnInit{

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../assets/images/radhost.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: '../../assets/images/snezka.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
    this.slides[2] = {
      id: 2,
      src: '../../assets/images/svKaterina.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    };
  }
}