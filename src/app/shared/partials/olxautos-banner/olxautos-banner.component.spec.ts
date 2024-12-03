import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlxautosBannerComponent } from './olxautos-banner.component';

describe('OlxautosBannerComponent', () => {
  let component: OlxautosBannerComponent;
  let fixture: ComponentFixture<OlxautosBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlxautosBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlxautosBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
