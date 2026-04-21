import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../model/hero.model';
import { HeroCard } from '../hero-card/hero-card';
import { HeroEdit } from '../hero-edit/hero-edit';

@Component({
  selector: 'hero-list',
  imports: [CommonModule, HeroCard, HeroEdit],
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

  selectedHero: Hero | null = null;

  markAsDone(heroId: number) {
    const hero = this.heroes.find(h => h.id === heroId);
    if (hero) {
      hero.completata = true;
    }
  }

  startEditHero(hero: Hero) {
    this.selectedHero = { ...hero };
  }

  updateHero(updatedHero: Hero) {
    const index = this.heroes.findIndex(h => h.id === updatedHero.id);
    if (index !== -1) {
      this.heroes[index] = updatedHero;
    }
    this.selectedHero = null;
  }

  cancelEdit() {
    this.selectedHero = null;
  }

  get totalCompleted(): number {
    return this.heroes.filter(h => h.completata).length;
  }
}