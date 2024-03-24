import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-external-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './external-layout.component.html',
  styleUrl: './external-layout.component.css'
})
export class ExternalLayoutComponent implements OnInit {
  ngOnInit(): void {
      console.log("External Layout component");
  }
}
