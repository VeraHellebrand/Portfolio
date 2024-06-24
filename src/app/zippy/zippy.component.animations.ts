import { animate, state, style, transition, trigger } from "@angular/animations";

export const expandCollapse = trigger('expandCollapse', [
          state('collapsed', style({
            height: 0,
            overflow: 'hidden',
            opacity: 0
          })),
          state('expanded', style({
            height: '*',
            overflow: 'hidden',
          })),
          transition('collapsed => expanded', [
            animate('300ms ease-out', style({height: '*'})),
            animate(1000, style({opacity: 1}))
          ]),
          transition('expanded => collapsed', [
            animate('300ms ease-in')
          ])
        ])