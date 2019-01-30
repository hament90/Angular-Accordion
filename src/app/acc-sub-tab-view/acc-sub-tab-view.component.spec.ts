import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccSubTabViewComponent } from './acc-sub-tab-view.component';

describe('AccSubTabViewComponent', () => {
  let component: AccSubTabViewComponent;
  let fixture: ComponentFixture<AccSubTabViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccSubTabViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccSubTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
