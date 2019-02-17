import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Array<Hero> = [
    { id: 1, name: 'Mr. Nice' },
    { id: 2, name: 'Narco' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' },
    { id: 5, name: 'Magneta' },
    { id: 6, name: 'RubberMan' },
    { id: 7, name: 'Dynama' },
    { id: 8, name: 'Dr IQ' },
    { id: 9, name: 'Magma' },
    { id: 10, name: 'Tornado' }
  ];
  selected: Hero;

  constructor() { }

  ngOnInit() {
    this.selected = null;
    this.getHeroes();
  }

  getHeroes(): void {
  }

  select(event, sid): void {
    console.log(sid);
    this.selected = this.heroes.filter(h => { return h.id == sid })[0];
  }

  add(name: string): void {
  }

  delete(hero: Hero): void {
  }
}
