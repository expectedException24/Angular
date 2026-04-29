import { Routes } from '@angular/router';
import { ContattiListComponent } from './components/contatti-list/contatti-list';

export const routes: Routes = [
  { path: '', redirectTo: 'contatti', pathMatch: 'full' },
  { path: 'contatti', component: ContattiListComponent }
];
