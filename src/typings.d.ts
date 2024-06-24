declare module 'jquery-scrollify' {
          interface ScrollifyOptions {
                    section: string;
                    scrollSpeed?: number;
                    interstitialSection?: string;
                    [key: string]: any;
          }

          interface ScrollifyStatic {
                    (options: ScrollifyOptions): void;
                    move(section: string): void;
                    instantMove(section: string): void;
                    next(): void;
                    previous(): void;
                    current(): any;
                    disable(): void;
                    enable(): void;
                    destroy(): void;
          }

          interface JQueryStatic {
                    scrollify: ScrollifyStatic;
          }

          export = ScrollifyStatic;
}
