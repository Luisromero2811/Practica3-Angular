import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutetringComponent } from './routetring.component';

describe('RoutetringComponent', () => {
  let component: RoutetringComponent;
  let fixture: ComponentFixture<RoutetringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutetringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutetringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
