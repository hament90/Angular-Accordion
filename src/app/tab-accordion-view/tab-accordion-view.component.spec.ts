import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAccordionViewComponent } from './tab-accordion-view.component';

describe('TabAccordionViewComponent', () => {
  let component: TabAccordionViewComponent;
  let fixture: ComponentFixture<TabAccordionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAccordionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAccordionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
