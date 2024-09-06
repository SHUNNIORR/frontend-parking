import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseTicketFormComponent } from './close-ticket-form.component';

describe('CloseTicketFormComponent', () => {
  let component: CloseTicketFormComponent;
  let fixture: ComponentFixture<CloseTicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseTicketFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
