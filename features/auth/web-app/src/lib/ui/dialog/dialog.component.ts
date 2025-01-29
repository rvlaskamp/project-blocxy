import { Component, computed, inject, signal } from '@angular/core';
import { LibUiLogoComponent } from '@blocxy-project/lib-ui';
import { FeatureAuthService } from '../../services/auth/auth.service';

enum AuthSteps {
  welcome,
  signup,
  done,
}

@Component({
  selector: 'ftr-auth-dialog',
  imports: [LibUiLogoComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class FeatureAuthDialogComponent {
  #authService = inject(FeatureAuthService);

  showDialog = computed(() => !this.#authService.authenticated());
  activeAuthStep = signal(AuthSteps.welcome);

  welcomeStepActive = computed(
    () => this.activeAuthStep() === AuthSteps.welcome
  );
  signupStepActive = computed(() => this.activeAuthStep() === AuthSteps.signup);
  doneStepActive = computed(() => this.activeAuthStep() === AuthSteps.done);
}
