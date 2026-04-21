import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../model/hero.model';

@Component({
  selector: 'app-hero-edit',
  imports: [CommonModule, FormsModule],
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

  @Output() heroUpdated = new EventEmitter<Hero>();
  @Output() canceled = new EventEmitter<void>();

  nome: string = '';
  potere: string = '';

  ngOnInit() {
    this.initializeForm();
  }

  ngOnChanges() {
    this.initializeForm();
  }

  private initializeForm() {
    this.nome = this.hero.nome;
    this.potere = this.hero.potere;
  }

  onNameInput(value: string) {
    this.nome = value;
  }

  onPowerInput(value: string) {
    this.potere = value;
  }

  save() {
    if (this.nome.trim() && this.potere.trim()) {
      const updatedHero: Hero = {
        ...this.hero,
        nome: this.nome,
        potere: this.potere
      };
      this.heroUpdated.emit(updatedHero);
    }
  }

  cancel() {
    this.canceled.emit();
  }
}
