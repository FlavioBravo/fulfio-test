import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentComponent } from './incident.component';
import { IncidentRoutingModule } from './incident-routing.module';
import { InProgressComponent } from './pages/in-progress/in-progress.component';
import { ResolvedComponent } from './pages/resolved/resolved.component';
import { RouterModule } from '@angular/router';
import { CreateIncidentModalComponent } from './components/create-incident-modal/create-incident-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultSuccessComponent } from './components/result-success/result-success.component';
import { IncidentListComponent } from './components/incident-list/incident-list.component';
import { SharedModule } from '../../shared/shared.module';
import { IncidentService } from './services/incident.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from '../../core/core.module';
import { RoleInterceptor } from '../../core/interceptors/role.interceptor';

@NgModule({
  declarations: [
    IncidentComponent,
    InProgressComponent,
    ResolvedComponent,
    CreateIncidentModalComponent,
    ResultSuccessComponent,
    IncidentListComponent,
  ],
  imports: [
    CommonModule,
    IncidentRoutingModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RoleInterceptor,
      multi: true,
    },
    IncidentService,
  ],
})
export class IncidentModule {}
