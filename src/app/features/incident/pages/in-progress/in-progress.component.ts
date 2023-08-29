import { Component } from '@angular/core';
import { map } from 'rxjs';
import {
  getTextFromStatus,
  getTextFromType,
  getTimeAgoMinutes,
} from '../../../../shared/utils/utils';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss'],
})
export class InProgressComponent {
  incidentList: any[] = [];
  constructor(private incidentService: IncidentService) {
    this.incidentService.searchText$.subscribe((text) => this.search(text));
  }

  ngOnInit(): void {
    this.getIncidentList();
  }

  search(searchText: string) {
    if (searchText) {
      const resultList = this.incidentList.filter(
        (incident: any) =>
          incident.title.includes(searchText) ||
          incident.message.includes(searchText)
      );
      this.incidentList = [...resultList];
    } else {
      this.getIncidentList();
    }
  }

  getIncidentList(): void {
    this.incidentService
      .getIncidentList()
      .pipe(
        map((res) => {
          const list = res.payload.map((item: any) => ({
            ...item,
            title: `Incidencia #${item.incident_id}`,
            typeText: getTextFromType(item.type),
            statusText: getTextFromStatus(item.status),
            time: getTimeAgoMinutes(item.created_at),
          }));
          return list;
        })
      )
      .subscribe((res) => {
        this.incidentList = res.filter(
          (item: any) => item?.status === 'PENDING'
        );
      });
  }

  resolveIncident(event: any): void {
    this.incidentService
      .patchEditProduct({
        incident_id: event.incident_id,
        status: 'RESOLVED',
      })
      .subscribe((res) => {
        if (res?.success) {
          this.getIncidentList();
        }
      });
  }
}
