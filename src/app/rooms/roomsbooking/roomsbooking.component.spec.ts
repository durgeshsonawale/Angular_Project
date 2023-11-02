import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsbookingComponent } from './roomsbooking.component';

describe('RoomsbookingComponent', () => {
  let component: RoomsbookingComponent;
  let fixture: ComponentFixture<RoomsbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsbookingComponent]
    });
    fixture = TestBed.createComponent(RoomsbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
