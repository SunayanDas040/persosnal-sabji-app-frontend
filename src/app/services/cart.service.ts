import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartCount: Subject<boolean> = new Subject<boolean>();
  public cartCountObs$: Observable<boolean> = this.cartCount.asObservable();

  constructor() { }

  incrementCount() {
    this.cartCount.next(true);
  }

  decrementCount() {
    this.cartCount.next(false);
  }
}
