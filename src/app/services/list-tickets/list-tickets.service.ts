import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListActiveTicketsResponse } from './list-tickets.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListTicketsService {
  constructor(private http: HttpClient) {}
  /**
   * Function that get all tickets that are active
   *
   * @returns Observable<ListActiveTicketsResponse>
   */
  ListActivesTickets(): Observable<ListActiveTicketsResponse> {
    return this.http.get<ListActiveTicketsResponse>(
      `${environment.url}/ticket/create`
    );
  }
}
