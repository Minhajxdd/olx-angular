import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshRecommendationsComponent } from './fresh-recommendations.component';

describe('FreshRecommendationsComponent', () => {
  let component: FreshRecommendationsComponent;
  let fixture: ComponentFixture<FreshRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreshRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
