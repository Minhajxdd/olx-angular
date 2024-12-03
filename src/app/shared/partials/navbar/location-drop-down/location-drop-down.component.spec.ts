import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDropDownComponent } from './location-drop-down.component';

describe('LocationDropDownComponent', () => {
  let component: LocationDropDownComponent;
  let fixture: ComponentFixture<LocationDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDropDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
