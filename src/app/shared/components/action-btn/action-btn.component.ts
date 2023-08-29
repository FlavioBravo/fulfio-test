import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.scss']
})
export class ActionBtnComponent {
  @Input() theme = 'pending';
  @Input() text = 'Pendiente';
}
