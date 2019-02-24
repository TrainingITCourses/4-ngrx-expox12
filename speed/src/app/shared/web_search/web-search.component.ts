import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/core/store';
import { LoadOptions } from 'src/app/core/store/crit-options/crit-options.actions';
import { Status, Agency, Mission } from 'src/app/store/models';
import { LoadFilter } from 'src/app/core/store/filter/filter.actions';

@Component({
  selector: 'app-web-search',
  templateUrl: './web-search.component.html',
  styleUrls: ['./web-search.component.css']
})
export class WebSearchComponent implements OnInit {

  private resultCrit: any = { id: '0', value: 'status' };
  private filterValues: Status[] | Agency[] | Mission[];

  @Output() private filterForLaunches = new EventEmitter();

  constructor(private store: Store<RootState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadOptions(this.resultCrit));
    this.observeCriterion();
    this.observeSelectValue();
  }

  private observeSelectValue() {
    this.store.select("values").subscribe(result => {
      if(this.resultCrit) {
        this.store.dispatch(new LoadFilter({ type: this.resultCrit.value, value: result.value }));
      }
    })
  }

  private observeCriterion() {
    this.store.select('options').subscribe(result => {
      this.resultCrit = result.critType;
      this.filterValues = result.options;
    }, error => {})
  }


}
