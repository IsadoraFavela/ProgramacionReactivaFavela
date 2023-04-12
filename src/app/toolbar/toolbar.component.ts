import { Component } from '@angular/core';
import { ToolbarDashboardService } from '../toolbar-dashboard.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private toolbarDashboardService: ToolbarDashboardService) {}
  isDrawerOpen = false;
  toggleDrawer() {
    this.toolbarDashboardService.toggleDrawer(
      
      this.isDrawerOpen = !this.isDrawerOpen
      
      );

  }
}

