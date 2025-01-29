import { Component, computed, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LibUiLogoComponent } from '@blocxy-project/lib-ui';
import { FeatureAuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'ftr-auth-dialog',
  imports: [LibUiLogoComponent, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  host: {
    '[class.is-visible]': 'dialogVisible()',
    '[class.is-hidden]': '!dialogVisible()',
  },
})
export class FeatureAuthDialogComponent {
  #authService = inject(FeatureAuthService);

  dialogVisible = computed(() => {
    const initializing = this.#authService.initializing();
    const authenticated = this.#authService.authenticated();

    if (initializing) {
      return false;
    }

    return !authenticated;
  });

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  signin() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();

      return;
    }

    this.#authService.signin();
  }
}
