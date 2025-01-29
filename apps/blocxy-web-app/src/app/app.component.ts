import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FeatureAuthDialogComponent,
  FeatureAuthService,
} from '@blocxy-project/FeatureAuthWebApp';
import { LibUiRootComponent } from '@blocxy-project/lib-ui';

@Component({
  imports: [RouterModule, LibUiRootComponent, FeatureAuthDialogComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    class: 'contents',
  },
})
export class AppComponent {
  #authService = inject(FeatureAuthService);

  rootVisible = computed(() => this.#authService.authenticated());
}
