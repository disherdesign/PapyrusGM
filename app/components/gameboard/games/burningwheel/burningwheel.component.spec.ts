import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurningwheelComponent } from './burningwheel.component';

describe('BurningwheelComponent', () => {
  let component: BurningwheelComponent;
  let fixture: ComponentFixture<BurningwheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurningwheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurningwheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
