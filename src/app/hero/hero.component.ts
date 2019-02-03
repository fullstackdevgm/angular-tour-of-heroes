import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

	hero: {
		id: int,
		name: string,
	} = {
		id: 1,
		name: 'Test'
	};

	constructor() { }

	ngOnInit() {
	}

}
