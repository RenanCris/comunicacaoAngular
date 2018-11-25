import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroFilhoAComponent } from './primeiro-filho-a.component';

describe('PrimeiroFilhoAComponent', () => {
  let component: PrimeiroFilhoAComponent;
  let fixture: ComponentFixture<PrimeiroFilhoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroFilhoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroFilhoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
