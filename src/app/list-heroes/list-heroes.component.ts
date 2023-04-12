import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent {
  heroes=HEROES;
  selectedHero?:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
}
