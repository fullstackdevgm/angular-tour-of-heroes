import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Hero } from '../x-class/hero';
 
@Component({
  selector: 'app-hero-log',
  templateUrl: './hero-log.component.html',
  styleUrls: [ './hero-log.component.css' ]
})
export class HeroLogComponent implements OnChanges {
  changeLog: string[] = [];
  @Input() isDashboard: boolean;
  @Input() hero: Hero;
  @Input() status: boolean;
 
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string;
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (!changedProp.isFirstChange()) {
        let l_isDashboard = (changedProp.currentValue.isDashboard) ? changedProp.currentValue.isDashboard : this.isDashboard;
        let l_hero = (changedProp.currentValue.hero) ? changedProp.currentValue.hero : this.hero;
        let l_status = (changedProp.currentValue.status) ? changedProp.currentValue.status : this.status;

        let hero = JSON.stringify(l_hero);
        let type = l_isDashboard ? "Dashboard" : "List";
        let status = l_isDashboard ? "Clicked" : (l_status ? "Selected" : "Deselected");

        log = `${type}: Hero{${hero}} is ${status}`;
      }
    }
    this.changeLog.push(log);
  }
}