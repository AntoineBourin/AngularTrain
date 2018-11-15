import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { YoutubeServiceService } from '../youtube-service.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private youtube: YoutubeServiceService) { }
  onHeroSelection(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.youtube.getLastVideos();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
