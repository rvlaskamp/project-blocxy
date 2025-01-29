import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeatureAuthService {
  #authenticated = signal(false);
  get authenticated() {
    return computed(() => this.#authenticated());
  }

  signin() {
    this.#authenticated.set(true);
  }

  signout() {
    this.#authenticated.set(false);
  }
}
