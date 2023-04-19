import { Component, OnDestroy } from '@angular/core';
import { ToolbarDashboardService } from '../toolbar-dashboard.service';
import { Usuario } from '../core/models';
import { AuthService } from '../core/services/auth.service';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent {
 
  showFiller = false;
  isDrawerOpen = false;



  authUser$: Observable<Usuario>;
  
  suscripcionAuthU: Subscription | null = null;

  destroyed$ = new Subject<void>();
  

  constructor(
    private toolbarDashboardService: ToolbarDashboardService, 
    private authService: AuthService,
    private router: Router
    ) {
      this.authUser$=this.authService.obtenerUsuarioAutenticado()
      /*    this.authService.obtenerUsuarioAutenticado()
           .pipe(
            takeUntil(this.destroyed$)
           )
      
           .subscribe((usuario) => this.authUser = usuario); */  
     this.toolbarDashboardService.isDrawerOpen$.subscribe((isOpen) => {
     this.isDrawerOpen = isOpen;
     console.log(isOpen);

      
  });
  
 }
 ngOnDestroy(): void {
  this.destroyed$.next();
  this.destroyed$.complete();
}

logout(): void {
  this.router.navigate(['auth', 'login']);
}

  
}


