import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextBtnsComponent } from './next-btns.component';

describe('NextBtnsComponent', () => {
  let component: NextBtnsComponent;
  let fixture: ComponentFixture<NextBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
