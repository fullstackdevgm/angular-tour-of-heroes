import { Component, OnInit } from '@angular/core';
import { Hero } from '../x-class/hero';
import { HeroService } from '../x-services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  isLoading = false;
  clicked: Hero;
  isDashboard: boolean = true;
  status: boolean;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.isLoading = true;
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes.slice(1, 5)
      this.isLoading = false
    });
  }

  onSelected(status: boolean, clicked: Hero) {
    this.status = status;
    this.clicked = clicked;
  }
}