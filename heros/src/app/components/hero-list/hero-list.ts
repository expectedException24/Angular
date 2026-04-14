import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../model/hero.model';
import { HeroCard } from '../hero-card/hero-card';

@Component({
  selector: 'hero-list',
  imports: [CommonModule, HeroCard],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css'
})
export class HeroList {
  title = 'hero';

  heroes: Hero[] = [
    { id: 1, nome: 'Invicible', potere: 'Super forza', completata: false },
    { id: 2, nome: 'Omni-man', potere: 'Super forza', completata: false },
    { id: 3, nome: 'Lombrico', potere: 'Concime', completata: false },
  ];

  markAsDone(heroId: number) {
    const hero = this.heroes.find(h => h.id === heroId);
    if (hero) {
      hero.completata = true;
    }
  }

  get totalCompleted(): number {
    return this.heroes.filter(h => h.completata).length;
  }
}