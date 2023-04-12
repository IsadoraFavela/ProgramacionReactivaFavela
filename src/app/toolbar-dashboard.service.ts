import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToolbarDashboardService {

  private isDrawerOpenSubject = new Subject<boolean>();

  isDrawerOpen$ = this.isDrawerOpenSubject.asObservable();

  toggleDrawer(isOpen: boolean) {
    this.isDrawerOpenSubject.next(isOpen);
  }
}
