import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides = [
    { title: 'First Slide', subtitle: 'This is the first slide', src: '../../assets/images/radhost.jpg' },
    { title: 'Second Slide', subtitle: 'This is the second slide', src: '../../assets/images/snezka.jpg' },
    { title: 'Third Slide', subtitle: 'This is the third slide', src: '../../assets/images/svKaterina.jpg' }
  ];

  currentSlide = 0;
  autoSlideInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide();
  }
  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  clearAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  resetAutoSlide(): void {
    this.clearAutoSlide();
    this.startAutoSlide();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetAutoSlide();
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.resetAutoSlide();
  }
}
