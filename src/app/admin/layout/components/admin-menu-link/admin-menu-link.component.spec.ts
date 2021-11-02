import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuLinkComponent } from './admin-menu-link.component';

describe('AdminMenuLinkComponent', () => {
  let component: AdminMenuLinkComponent;
  let fixture: ComponentFixture<AdminMenuLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminMenuLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
