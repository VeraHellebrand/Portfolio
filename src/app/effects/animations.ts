import { animate, animation, style, transition, trigger, useAnimation } from "@angular/animations";


const fadeInAnimation = animation([
          style({ opacity: '0' }),
          animate('{{ duration }} {{ easing }}')
], {
          params: {
                    duration: '2s',
                    easing: 'ease-in-out'
          }
});

const slideAnimationL = animation([
          style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
          }),
          animate('{{ duration }} {{ easing }}')],
          {
                    params: {
                              duration: '2s',
                              easing: 'ease-out'
                    }
          }
)
const slideAnimationR = animation([
          style({
                    opacity: 0,
                    transform: 'translateX(100%)'
          }),
          animate('{{ duration }} {{ easing }}')],
          {
                    params: {
                              duration: '2s',
                              easing: 'ease-out'
                    }
          }
)

export const slideL = trigger('slideL', [
          transition(':enter', useAnimation(slideAnimationL))
]);

export const slideR = trigger('slideR', [
          transition(':enter', useAnimation(slideAnimationR))
]);

export const fade = trigger('fade', [
          transition(':enter', useAnimation(fadeInAnimation))
]);