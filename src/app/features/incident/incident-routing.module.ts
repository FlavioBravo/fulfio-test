import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidentComponent } from './incident.component';
import { InProgressComponent } from './pages/in-progress/in-progress.component';
import { ResolvedComponent } from './pages/resolved/resolved.component';

const routes: Routes = [
  {
    path: '',
    component: IncidentComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'en-curso',
        component: InProgressComponent,
      },
      {
        path: 'resueltas',
        component: ResolvedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentRoutingModule {}
