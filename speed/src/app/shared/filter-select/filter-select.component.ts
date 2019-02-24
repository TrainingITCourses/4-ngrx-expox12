import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RootState } from 'src/app/core/store';
import { Store } from '@ngrx/store';
import { LoadSelectValue } from 'src/app/core/store/crit-values/crit-values.actions';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSelectComponent implements OnInit {

  @Input() public criterionValues: any[];
  @Output() private changeFilterValue = new EventEmitter(); //--

  constructor(private store: Store<RootState>) { }

  ngOnInit() {
  }

  private selectFilterValue( filterValue ) {
    const valueId = parseInt(filterValue, 10);
    if(valueId) this.store.dispatch(new LoadSelectValue(valueId));
    
  }

}
