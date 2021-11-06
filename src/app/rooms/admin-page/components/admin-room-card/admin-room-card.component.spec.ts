import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomCardComponent } from './admin-room-card.component';

describe('AdminRoomCardComponent', () => {
  let component: AdminRoomCardComponent;
  let fixture: ComponentFixture<AdminRoomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminRoomCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
