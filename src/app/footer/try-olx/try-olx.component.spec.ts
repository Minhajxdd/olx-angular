import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryOlxComponent } from './try-olx.component';

describe('TryOlxComponent', () => {
  let component: TryOlxComponent;
  let fixture: ComponentFixture<TryOlxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TryOlxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryOlxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
