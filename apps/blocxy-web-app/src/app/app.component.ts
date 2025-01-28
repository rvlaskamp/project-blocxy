import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibUiRootComponent } from '@blocxy-project/lib-ui';

@Component({
  imports: [RouterModule, LibUiRootComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    class: 'contents',
  },
})
export class AppComponent {}
