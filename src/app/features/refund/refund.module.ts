import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefundComponent } from './refund.component';
import { RefundRoutingModule } from './inventory-routing.module';

@NgModule({
  declarations: [RefundComponent],
  imports: [CommonModule, RefundRoutingModule],
})
export class RefundModule {}
