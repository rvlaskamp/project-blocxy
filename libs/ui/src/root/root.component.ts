import { Component, input, ViewEncapsulation } from '@angular/core';
import { RootBgComponent } from './root-bg/root-bg.component';

@Component({
  selector: 'lib-ui-root',
  templateUrl: './root.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [RootBgComponent],
  host: {
    class: 'contents',
  },
})
export class LibUiRootComponent {
  contentVisible = input(false);
}
