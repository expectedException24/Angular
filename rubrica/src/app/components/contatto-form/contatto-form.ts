import { Component, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contatto } from '../../services/rubrica.service';

@Component({
  selector: 'app-contatto-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatto-form.html',
  styleUrl: './contatto-form.css'
})
export class ContattoFormComponent {
  @Output() onContatto = new EventEmitter<Contatto>();

  nome = signal('');
  cognome = signal('');
  telefono = signal('');
  mail = signal('');
  showForm = signal(false);

  submit() {
    if (!this.nome() || !this.cognome() || !this.telefono() || !this.mail())
      return;

    const contatto: Contatto = {
      nome: this.nome(),
      cognome: this.cognome(),
      telefono: this.telefono(),
      mail: this.mail()
    };

    this.onContatto.emit(contatto);
    this.reset();
  }

  reset() {
    this.nome.set('');
    this.cognome.set('');
    this.telefono.set('');
    this.mail.set('');
    this.showForm.set(false);
  }

  toggleForm() {
    this.showForm.update(v => !v);
  }
}
