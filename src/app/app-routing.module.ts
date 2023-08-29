import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentModule } from './features/incident/incident.module';
import { InventoryModule } from './features/inventory/inventory.module';
import { OrderModule } from './features/order/order.module';
import { RefundModule } from './features/refund/refund.module';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'incidencias',
        pathMatch: 'full',
      },
      {
        path: 'incidencias',
        loadChildren: () => import('./features/incident/incident.module').then((m):typeof IncidentModule => m.IncidentModule)
      },
      {
        path: 'inventario',
        loadChildren: () => import('./features/inventory/inventory.module').then((m):typeof InventoryModule => m.InventoryModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('./features/order/order.module').then((m):typeof OrderModule => m.OrderModule)
      },
      {
        path: 'devoluciones',
        loadChildren: () => import('./features/refund/refund.module').then((m):typeof RefundModule => m.RefundModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
