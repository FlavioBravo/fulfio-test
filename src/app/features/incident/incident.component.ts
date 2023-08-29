import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs';
import {
  getTextFromStatus,
  getTextFromType,
  getTimeAgoMinutes,
} from '../../shared/utils/utils';
import { ModalService } from '../../shared/services/modal.service';
import { CreateIncidentModalComponent } from './components/create-incident-modal/create-incident-modal.component';
import { ResultSuccessComponent } from './components/result-success/result-success.component';
import { IncidentService } from './services/incident.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss'],
})
export class IncidentComponent {
  searchForm = this.fb.group({
    search: [''],
  });
  incidentList = [];
  changeRoute = false;
  constructor(
    private modalService: ModalService,
    private incidentService: IncidentService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/incidencias') {
          this.changeRoute = false;
        } else {
          this.searchForm.reset();
          this.changeRoute = true;
        }
      }
    });
  }

  ngOnInit(): void {
    this.getIncidentList();
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
      .subscribe((res) => (this.incidentList = res));
  }

  openCreateIncidentModal(): void {
    const dialogRef = this.modalService.open(CreateIncidentModalComponent);

    dialogRef.afterClosed().subscribe((data) => {
      this.incidentService.postAddIncident(data).subscribe((res) => {
        if (res?.success) {
          this.openResultSuccessModal();
        }
      });
    });
  }

  openResultSuccessModal(): void {
    const dialogRef = this.modalService.open(ResultSuccessComponent);

    dialogRef.afterClosed().subscribe((data) => {
      this.getIncidentList();
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

  search() {
    const searchText = this.searchForm.get('search')?.value || '';
    this.incidentService.addSearchText(searchText);
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
}
