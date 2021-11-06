import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAdminPageComponent } from './room-admin-page.component';

describe('RoomAdminPageComponent', () => {
  let component: RoomAdminPageComponent;
  let fixture: ComponentFixture<RoomAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomAdminPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
