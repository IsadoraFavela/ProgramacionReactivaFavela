import { Component } from '@angular/core';
import { ToolbarDashboardService } from '../toolbar-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent {
  showFiller = false;
  isDrawerOpen = false;

  constructor(private toolbarDashboardService: ToolbarDashboardService) {
    this.toolbarDashboardService.isDrawerOpen$.subscribe((isOpen) => {
      this.isDrawerOpen = isOpen;
      console.log(isOpen);
      
    });
  }
  
}
