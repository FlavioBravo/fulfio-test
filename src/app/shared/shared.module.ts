import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { TagComponent } from './components/tag/tag.component';
import { StatusComponent } from './components/status/status.component';
import { ActionBtnComponent } from './components/action-btn/action-btn.component';

const SHARED_COMPONENTS = [
  SidebarComponent,
  HeaderComponent,
  TagComponent,
  StatusComponent,
  ActionBtnComponent
]

@NgModule({
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
