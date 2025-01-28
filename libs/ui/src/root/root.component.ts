import { Component, ViewEncapsulation } from '@angular/core';
import { RootBgComponent } from './root-bg/root-bg.component';

@Component({
  selector: 'lib-ui-root',
  templateUrl: './root.component.html',
  styleUrl: './root.component.css',
  encapsulation: ViewEncapsulation.None,
  imports: [RootBgComponent],
  host: {
    class: 'contents',
  },
})
export class LibUiRootComponent {}
