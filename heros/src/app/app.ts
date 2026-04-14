import { Component, signal } from '@angular/core';
import { HeroList } from "./components/hero-list/hero-list";

@Component({
  selector: 'app-root',
  imports: [HeroList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('heros');
}
