import { Component, Input } from '@angular/core';
import { Hero } from '../../model/hero.model';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.html',
  styleUrls: ['./hero-edit.css'],
})
export class HeroEdit {

  @Input() hero: Hero = {
    id: -1,
    nome: "",
    potere: "",
    completata: false
  };

}
