import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ftr-blocx-home-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  enabled = input.required<boolean>();
  cardTitle = input.required<string>();
  cardPlaceholderTitle = input.required<string>();
  cardPlaceholderSubtitle = input.required<string>();

  showPlaceholder = computed(() => !this.enabled());
}
