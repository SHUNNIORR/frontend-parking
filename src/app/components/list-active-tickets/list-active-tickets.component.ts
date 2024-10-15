import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ticket } from 'src/app/core/auth/models/ticket';
import { ListTicketsService } from 'src/app/services/list-tickets/list-tickets.service';

@Component({
  selector: 'app-list-active-tickets',
  templateUrl: './list-active-tickets.component.html',
  styleUrls: ['./list-active-tickets.component.scss'],
})
export class ListActiveTicketsComponent {
  listActiveTicketForm!: FormGroup;

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
  constructor(
    private fb: FormBuilder,
    private listTicketsService: ListTicketsService
  ) {
    this.listActiveTicketForm = this.fb.group({
      filterPlate: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit(): void {
    console.log(this.listActiveTicketForm);
    this.listTicketsService.ListActivesTickets().subscribe({
      next: res => {
        console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }
}
