import { Component } from '@angular/core';
import { ModalRef } from '../../../../shared/services/modal-ref';

@Component({
  selector: 'app-result-success',
  templateUrl: './result-success.component.html',
  styleUrls: ['./result-success.component.scss'],
})
export class ResultSuccessComponent {
  constructor(private dialogRef: ModalRef) {}

  close() {
    this.dialogRef.close();
  }
}
