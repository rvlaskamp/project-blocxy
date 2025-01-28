import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-ui-root-bg',
  templateUrl: './root-bg.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'contents',
  },
})
export class RootBgComponent {}
