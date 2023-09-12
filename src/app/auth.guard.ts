import{Injectable} from  '@angular/core'
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { SellerService } from './services/seller.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class authGuard implements CanActivate {
  constructor(private sellerService: SellerService) {}
                        
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable< boolean | UrlTree> | Promise<boolean | UrlTree >|boolean {
    if (localStorage.getItem('seller')) {
      return true;
    }
    return this.sellerService.isLoggedIn;
  }
}
