import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NodegardenComponent } from './nodegarden.component';

describe('NodegardenComponent', () => {
  let component: NodegardenComponent;
  let fixture: ComponentFixture<NodegardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodegardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodegardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
