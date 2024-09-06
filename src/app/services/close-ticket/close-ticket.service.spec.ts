import { TestBed } from '@angular/core/testing';

import { CloseTicketService } from './close-ticket.service';

describe('CloseTicketService', () => {
  let service: CloseTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloseTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
