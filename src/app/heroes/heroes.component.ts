import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes-list';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
    console.log(this.heroes);
  }
  onHeroSelection(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}