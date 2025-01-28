import { Component } from '@angular/core';
import {
  LibUiHeaderComponent,
  LibUiLogoComponent,
  LibUiMainContainerComponent,
} from '@blocxy-project/lib-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [
    LibUiHeaderComponent,
    LibUiLogoComponent,
    LibUiMainContainerComponent,
  ],
  host: {
    class: 'contents',
  },
})
export class HomeComponent {}
