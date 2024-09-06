import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTicketService } from 'src/app/services/create-ticket/create-ticket.service';

@Component({
  selector: 'app-create-ticket-form',
  templateUrl: './create-ticket-form.component.html',
  styleUrls: ['./create-ticket-form.component.scss']
})
export class CreateTicketFormComponent {
  createTicketForm!: FormGroup;

  constructor(private fb: FormBuilder, private createTicketService:CreateTicketService) {
    this.createTicketForm = this.fb.group({
      plate: ['', [Validators.required, Validators.minLength(6)]],
      typeOfVehicle: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log(this.createTicketForm)
    this.createTicketService.createTicket(this.createTicketForm.value).subscribe({
      next:(res:any)=>{
        console.log(res)
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error)
      }
    })
  }
}
