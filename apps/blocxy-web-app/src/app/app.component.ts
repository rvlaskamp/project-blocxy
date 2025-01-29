import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FeatureAuthDialogComponent,
  FeatureAuthService,
} from '@blocxy-project/ftr-auth-app';
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
export class AppComponent implements OnInit {
  #authService = inject(FeatureAuthService);

  rootVisible = computed(() => {
    const initializing = this.#authService.initializing();
    const authenticated = this.#authService.authenticated();

    return initializing || authenticated;
  });

  authInitializing = this.#authService.initializing;

  ngOnInit(): void {
    this.#authService.checkAuthStatus();
  }
}
