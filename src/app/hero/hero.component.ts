import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../x-class/hero';
import { HeroService }  from '../x-services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: [ './hero.component.css' ]
})
export class HeroComponent implements OnInit {
  id: Number;
  hero: Hero;
  heroes: Hero[] = [];
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getHeroes();
  }

  getHeroes(): void {
    this.isLoading = true;
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
      this.getHero()
      this.isLoading = false
    });
  }

  getHero(): void {
    this.hero = this.heroes.filter(h => { return h.id == this.id })[0]
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}