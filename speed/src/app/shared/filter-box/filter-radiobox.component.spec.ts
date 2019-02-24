import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRadioBoxComponent } from './filter-radiobox.component';

describe('CriterionSelectComponent', () => {
  let component: FilterRadioBoxComponent;
  let fixture: ComponentFixture<FilterRadioBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterRadioBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRadioBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
