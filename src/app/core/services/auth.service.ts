import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../models/index';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser$ = new Subject<Usuario>();

  constructor() { }

  obtenerUsuarioAutenticado(): Observable <Usuario> {
    return this.authUser$.asObservable();
  }
  login (Usuario: Usuario): void {
    this.authUser$.next(Usuario);
  }
}
