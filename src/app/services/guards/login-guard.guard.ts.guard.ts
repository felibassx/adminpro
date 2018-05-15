import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../service.index';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor( 
    public _usuarioService: UsuarioService,
    public router: Router
  ){

  }

  canActivate(){

    if ( this._usuarioService.estaLogeado() ){

      console.log( 'PASO EL GUARD' );
      return true;

    } else { 

      console.log( 'BLOQUEADO POR EL GUARD' );
      this.router.navigate(['/login']);
      return false;

    }
  }
}

