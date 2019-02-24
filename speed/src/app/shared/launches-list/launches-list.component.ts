import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Launch } from 'src/app/store/models/launch';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesListComponent implements OnInit {

  @Input() private launchList: Launch[];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
