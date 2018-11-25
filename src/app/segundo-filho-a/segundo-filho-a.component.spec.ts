import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoFilhoAComponent } from './segundo-filho-a.component';

describe('SegundoFilhoAComponent', () => {
  let component: SegundoFilhoAComponent;
  let fixture: ComponentFixture<SegundoFilhoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoFilhoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoFilhoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
