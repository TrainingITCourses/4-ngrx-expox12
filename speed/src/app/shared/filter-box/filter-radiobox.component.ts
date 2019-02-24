import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/core/store';
import { LoadOptions } from 'src/app/core/store/crit-options/crit-options.actions';

@Component({
  selector: 'app-filter-radiobox',
  templateUrl: './filter-radiobox.component.html',
  styleUrls: ['./filter-radiobox.component.css']
})
export class FilterRadioBoxComponent implements OnInit {

  @Output() private critValue = new EventEmitter();//-

  constructor(private store: Store<RootState>) { }

  ngOnInit() {
  }

  private onChangeCriterion(option) {
    this.store.dispatch(new LoadOptions(option));
  }

}
