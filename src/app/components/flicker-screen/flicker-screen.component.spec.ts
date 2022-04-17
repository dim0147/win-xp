import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickerScreenComponent } from './flicker-screen.component';

describe('FlickerScreenComponent', () => {
  let component: FlickerScreenComponent;
  let fixture: ComponentFixture<FlickerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlickerScreenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
