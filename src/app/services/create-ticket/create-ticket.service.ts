import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ticket, TicketResponse } from '../../core/auth/models/ticket';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateTicketService {

  constructor(private http: HttpClient) { }

  createTicket(ticket: ticket): Observable<TicketResponse>{
    return this.http.post<TicketResponse>(`${environment.url}/ticket/create`, ticket)
  }
}
