import { Component } from '@angular/core';
import { FtrBlocxHomeComponent } from '@blocxy-project/blocx-home';
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
    FtrBlocxHomeComponent,
  ],
  host: {
    class: 'contents',
  },
})
export class HomeComponent {}
