import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomsListComponent } from './admin-rooms-list.component';

describe('AdminRoomsListComponent', () => {
  let component: AdminRoomsListComponent;
  let fixture: ComponentFixture<AdminRoomsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminRoomsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
