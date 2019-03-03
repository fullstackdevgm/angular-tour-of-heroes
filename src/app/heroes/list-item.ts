import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Hero } from '../x-class/hero';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.html',
  styleUrls: [ './list-item.css' ]
})
export class ListItemComponent implements OnInit {
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