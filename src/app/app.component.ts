import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntrenamientoList } from './components/entrenamiento-list/entrenamiento-list.component';
import { FilterForm } from './components/filter-form/filter-form.component';
import { ENTRENAMIENTOS_MOCK } from './models/entrenamientos.mock';
import { Entrenamiento } from './models/entrenamiento.model';

@Component({
  imports: [RouterOutlet, EntrenamientoList, FilterForm],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  standalone: true
})
export class App {
  appName: string = 'TTracker';
  authorName: string = 'Ruben Carrillo';
  appPurpose: string = 'Registro de entrenamientos con sus variantes de ejercicios, cargas y volumen, tiempo, etc.';

  entrenamientos = signal<Entrenamiento[]>(ENTRENAMIENTOS_MOCK);
  selectedEntrenamiento = signal<Entrenamiento | null>(null);
}