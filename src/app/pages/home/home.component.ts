import { Component } from '@angular/core';
import { ticket } from 'src/app/core/auth/models/ticket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tickets: ticket[] = [
    {
      plate: '123abc',
      typeOfVehicle: 'CAR',
    },
    {
      plate: '123abc',
      typeOfVehicle: 'CAR',
    },
    {
      plate: '123abc',
      typeOfVehicle: 'CAR',
    },
    {
      plate: '123abc',
      typeOfVehicle: 'CAR',
    },
  ];
}
