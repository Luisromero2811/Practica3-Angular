import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutejsonComponent } from './routejson.component';

describe('RoutejsonComponent', () => {
  let component: RoutejsonComponent;
  let fixture: ComponentFixture<RoutejsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutejsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutejsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
