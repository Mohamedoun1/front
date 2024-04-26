import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('authToken');
    
    if (token) {
      return true; // Token existe, donc la route est activée
    } else {
      this.router.navigate(['/front/NotFound']); // Rediriger vers le composant NotFound
      return false;
    }
  }
}
