import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppModule } from '../app.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MatSidenavModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
