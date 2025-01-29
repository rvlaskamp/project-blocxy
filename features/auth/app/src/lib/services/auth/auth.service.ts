import { computed, Injectable, signal } from '@angular/core';

enum AuthStatus {
  Init,
  SignedIn,
  SignedOut,
}

@Injectable({
  providedIn: 'root',
})
export class FeatureAuthService {
  #status = signal(AuthStatus.Init);

  authenticated = computed(() => this.#status() === AuthStatus.SignedIn);
  initializing = computed(() => this.#status() === AuthStatus.Init);

  checkAuthStatus() {
    // TODO - Call API to validate JWT token in HttpOnly Cookie
    setTimeout(() => {
      this.#status.set(AuthStatus.SignedOut);
    }, 2000);
  }

  signin() {
    this.#status.set(AuthStatus.SignedIn);
  }

  signout() {
    this.#status.set(AuthStatus.SignedOut);
  }
}
