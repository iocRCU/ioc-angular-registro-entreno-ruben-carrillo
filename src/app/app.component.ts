import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  standalone: true
})
export class App {
  appName: string = 'TTracker';
  authorName: string = 'Ruben Carrillo';
  appPurpose: string = 'Registro de entrenamientos con sus variantes de ejercicios, cargas y volumen, tiempo, etc.';
}
