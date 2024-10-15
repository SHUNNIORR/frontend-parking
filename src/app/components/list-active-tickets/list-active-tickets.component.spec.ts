import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActiveTicketsComponent } from './list-active-tickets.component';

describe('ListActiveTicketsComponent', () => {
  let component: ListActiveTicketsComponent;
  let fixture: ComponentFixture<ListActiveTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListActiveTicketsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListActiveTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
