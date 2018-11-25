import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroFilhoA1Component } from './primeiro-filho-a1.component';

describe('PrimeiroFilhoA1Component', () => {
  let component: PrimeiroFilhoA1Component;
  let fixture: ComponentFixture<PrimeiroFilhoA1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroFilhoA1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroFilhoA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
