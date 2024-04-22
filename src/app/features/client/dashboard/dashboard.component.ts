import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatSelectModule, MatButtonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  public items: any[] = [];
  public selectedQuantity: any;
  public buyingOptions: any[] = [
    {
      quantity: '250g',
      price: '24',
      id: 1,
    },
    {
      quantity: '500g',
      price: '34.5',
      id: 2,
    },
    {
      quantity: '1kg',
      price: '68',
      id: 3
    },
  ];

  ngOnInit(): void {
    this.setItems();
    console.log('Client Dashboard');
  }

  changeValue(event: any) {
    console.log(event);
    this.selectedQuantity = event;
  }

  addQuantity(event: any) {
    event.stopPropagation();
  }

  setItems() {
    this.items = [
      {
        name: 'Capsicum',
        imageSrc:
          'https://www.shutterstock.com/image-photo/green-pepper-isolated-on-white-260nw-1381756703.jpg',
      },
      {
        name: 'Carrot',
        imageSrc:
          'https://seed2plant.in/cdn/shop/products/carrotseeds.jpg?v=1604032858',
      },
      {
        name: 'Cauliflower',
        imageSrc:
          'https://media.istockphoto.com/id/511868689/photo/fresh-cauliflower-with-pieces-isolated-on-white.jpg?s=612x612&w=0&k=20&c=6HjOXfDxV2B5Oazl4jK69GiORAtQEPS7WYpTAJ-KW24=',
      },
      {
        name: 'Onion',
        imageSrc:
          'https://www.shutterstock.com/image-photo/red-whole-sliced-onion-isolated-260nw-1684863088.jpg',
      },
      {
        name: 'Apple',
        imageSrc:
          'https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg',
      },
      {
        name: 'Carrot',
        imageSrc:
          'https://seed2plant.in/cdn/shop/products/carrotseeds.jpg?v=1604032858',
      },
      {
        name: 'Cauliflower',
        imageSrc:
          'https://media.istockphoto.com/id/511868689/photo/fresh-cauliflower-with-pieces-isolated-on-white.jpg?s=612x612&w=0&k=20&c=6HjOXfDxV2B5Oazl4jK69GiORAtQEPS7WYpTAJ-KW24=',
      },
      {
        name: 'Onion',
        imageSrc:
          'https://www.shutterstock.com/image-photo/red-whole-sliced-onion-isolated-260nw-1684863088.jpg',
      },
      {
        name: 'Apple',
        imageSrc:
          'https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg',
      },
    ];
  }
}
