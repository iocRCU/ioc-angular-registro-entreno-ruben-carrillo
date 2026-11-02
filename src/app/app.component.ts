import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntrenamientoList } from './components/entrenamiento-list/entrenamiento-list.component';
import { EntrenamientoCard } from './components/entrenamiento-card/entrenamiento-card.component';
import { FilterForm } from './components/filter-form/filter-form.component';
import { ENTRENAMIENTOS_MOCK } from './models/entrenamientos.mock';
import { Entrenamiento } from './models/entrenamiento.model';
import { FiltroEntrenamientos } from './models/filtro.model';

@Component({
  imports: [RouterOutlet, EntrenamientoList, EntrenamientoCard, FilterForm],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  standalone: true
})
export class App {
  appName = 'TTracker';
  authorName = 'Ruben Carrillo';
  appPurpose = 'Registro de entrenamientos con sus variantes de ejercicios, cargas y volumen, tiempo, etc.';

  private readonly fuente = signal<Entrenamiento[]>(ENTRENAMIENTOS_MOCK);
  private readonly filtroTexto = signal('');
  private readonly filtroCategoria = signal('');

  readonly entrenamientos = computed(() => {
    const texto = this.filtroTexto().trim().toLowerCase();
    const categoria = this.filtroCategoria();

    return this.fuente().filter((e) => {
      const coincideTexto =
        !texto ||
        e.titulo.toLowerCase().includes(texto) ||
        e.descripcion.toLowerCase().includes(texto);
      const coincideCategoria = !categoria || e.categoria === categoria;
      return coincideTexto && coincideCategoria;
    });
  });

  readonly selectedEntrenamiento = signal<Entrenamiento | null>(null);

  applyFilter(filtro: FiltroEntrenamientos): void {
    this.filtroTexto.set(filtro.text);
    this.filtroCategoria.set(filtro.categoria);
  }

  resetFilter(): void {
    this.filtroTexto.set('');
    this.filtroCategoria.set('');
    this.selectedEntrenamiento.set(null);
  }
}