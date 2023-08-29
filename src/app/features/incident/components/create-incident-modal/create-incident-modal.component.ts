import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalRef } from '../../../../shared/services/modal-ref';

@Component({
  selector: 'app-create-incident-modal',
  templateUrl: './create-incident-modal.component.html',
  styleUrls: ['./create-incident-modal.component.scss'],
})
export class CreateIncidentModalComponent {
  readonly typeList = [
    {
      value: 'DOUBT',
      text: 'Duda',
    },
    {
      value: 'INTEGRATION',
      text: 'Integración',
    },
    {
      value: 'ORDER',
      text: 'Pedido',
    },
  ];
  incidentForm = this.fb.group({
    type: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    message: ['', [Validators.required]],
  });

  constructor(private dialogRef: ModalRef, private fb: FormBuilder) {}

  save() {
    this.dialogRef.close(this.incidentForm.value);
  }

  cancel() {
    this.dialogRef.close();
  }
}
