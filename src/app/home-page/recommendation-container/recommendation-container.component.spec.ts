import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationContainerComponent } from './recommendation-container.component';

describe('RecommendationContainerComponent', () => {
  let component: RecommendationContainerComponent;
  let fixture: ComponentFixture<RecommendationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
