import { Component, OnInit } from '@angular/core';

import { Hero } from '../x-class/hero';
import { HeroService } from '../x-services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selected: Hero;
  isLoading = false;
  isDashboard: boolean = false;
  status: boolean;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.selected = null;
    this.getHeroes();
  }

  getHeroes(): void {
    this.isLoading = true;
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
      this.isLoading = false;
    });
  }

  select(status: boolean, selected: Hero): void {
    this.status = status;
    this.selected = selected;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero).subscribe(hero => { this.heroes.push(hero); });
  }

  delete(hero: Hero): void {
  }
}
