import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-ui-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class LibUiDialogComponent {
  visible = input(false);
}
