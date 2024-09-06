import { Component, Input } from '@angular/core';
import { ticket } from '../../../core/auth/models/ticket';

@Component({
  selector: 'app-ticket-container',
  templateUrl: './ticket-container.component.html',
  styleUrls: ['./ticket-container.component.scss']
})
export class TicketContainerComponent {
  @Input() ticket!: ticket;

  closeTicket(plate:string){
    console.log('ticket closed', plate)
  }
}
