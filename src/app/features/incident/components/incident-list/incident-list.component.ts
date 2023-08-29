import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss'],
})
export class IncidentListComponent {
  @Input() list: any[] = [];
  @Output() resolvedClick = new EventEmitter<any>();
  isChatOpened = false;
  chatItem: any;
  textMessages: any[] = [];

  constructor(private incidentService: IncidentService) {}

  openChat(item: any) {
    this.isChatOpened = true;
    this.chatItem = item;
    this.incidentService
      .getChatByIncident(item?.incident_id)
      .subscribe((res) => {
        this.textMessages = res;
      });
  }
  closeChat() {
    this.isChatOpened = false;
    this.chatItem = null;
  }

  ItemById(index: number, item: any) {
    return item.incident_id;
  }

  handleClick() {
    this.resolvedClick.emit(this.chatItem);
    this.closeChat();
  }
}
