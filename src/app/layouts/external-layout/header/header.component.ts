import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginPopupComponent } from '../../../features/client/login-popup/login-popup.component';
import { CartService } from '../../../services/cart.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  public searchedTerm!: string;
  cartCount = signal(0);
  private cartSub!: Subscription;
  constructor(private _dialog: MatDialog, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cartCountObs$.subscribe({
      next: (incrDecr: boolean) => {
        this.cartCount.update((prevCount: number) =>
          incrDecr ? prevCount + 1 : prevCount - 1
        );
      },
    });
  }

  login() {
    this._dialog.open(LoginPopupComponent, {
      panelClass: '',
      data: {},
    });
  }

  gotoCart() {}

  ngOnDestroy(): void {
    this.cartSub && this.cartSub.unsubscribe();
  }
}
