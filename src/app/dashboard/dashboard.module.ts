import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { TablasModule } from '../pages/tablas/tablas.module';
import { ToolbarModule } from '../toolbar/toolbar.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MatSidenavModule, MatButtonModule, TablasModule, ToolbarModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
