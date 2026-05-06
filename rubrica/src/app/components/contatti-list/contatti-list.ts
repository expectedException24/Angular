import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RubricaService, Contatto } from '../../services/rubrica.service';
import { ContattoFormComponent } from '../contatto-form/contatto-form';

@Component({
  selector: 'app-contatti-list',
  standalone: true,
  imports: [CommonModule, ContattoFormComponent],
  templateUrl: './contatti-list.html',
  styleUrl: './contatti-list.css'
})
export class ContattiListComponent implements OnInit {
  contatti = signal<Contatto[]>([]);

  constructor(private rubricaService: RubricaService) {}

  ngOnInit() {
    this.caricaContatti();
  }

  caricaContatti() {
    this.rubricaService.getContatti().subscribe({
      next: (data) => {
        this.contatti.set(data);
      }
    });
  }

  aggiungiContatto(contatto: Contatto) {
    this.rubricaService.creaContatto(contatto).subscribe({
      next: () => {
        this.caricaContatti();
      }
    });
  }

  eliminaContatto(id?: string) {
    if (!id) return;
    this.rubricaService.eliminaContatto(id).subscribe({
      next: () => {
        this.caricaContatti();
      }
    });
  }
}
