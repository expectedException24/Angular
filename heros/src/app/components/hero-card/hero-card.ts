import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../model/hero.model';

@Component({
  selector: 'hero-card',
  imports: [],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css'
})
export class HeroCard {
  @Input() hero!: Hero;
  @Output() onMissionDone = new EventEmitter<number>();

  notifyParent() {
    this.onMissionDone.emit(this.hero.id);
  }
}