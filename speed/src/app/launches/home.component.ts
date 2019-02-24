import { Component, OnInit } from '@angular/core';
import { Launch } from '../store/models/launch';
import { RootState } from '../core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private launches: Launch[];
  private counter: number = 0;

  constructor(private store: Store<RootState>) { }

  ngOnInit() {
    this.observeFilter();
  }  

  private observeFilter() {
    this.store.select("filter").subscribe(result => {
      this.counter = result.launches.length;
      this.launches = result.launches;
    }, error => {});
  }

}
