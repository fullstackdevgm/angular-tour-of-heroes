import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Hero } from '../x-class/hero';

@Component({
  selector: 'dashboard-item',
  templateUrl: './dashboard-item.html',
  styleUrls: [ './dashboard-item.css' ]
})
export class DashboardItemComponent implements OnInit {
  @Input() hero: Hero;
  heroes: Hero[] = [];
  isSelected = false;
  @Output() selected = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  select(value: boolean) {
    this.isSelected = !this.isSelected;
    this.selected.emit(this.isSelected);
  }
}