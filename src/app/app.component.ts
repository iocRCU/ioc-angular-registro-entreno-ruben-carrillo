import { Component, signal, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntrenamientoList } from './components/entrenamiento-list/entrenamiento-list.component';
import { EntrenamientoCard } from './components/entrenamiento-card/entrenamiento-card.component';
import { FilterForm } from './components/filter-form/filter-form.component';
import { EntrenamientoService, NuevoEntrenamiento } from './services/entrenamiento.service';
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

  // ---- NUEVO: el servicio es ahora la fuente de datos ----
  private readonly entrenamientoService = inject(EntrenamientoService);
  readonly cargando = this.entrenamientoService.cargando;
  readonly error = this.entrenamientoService.error;

  private readonly filtroTexto = signal('');
  private readonly filtroCategoria = signal('');

  
  readonly entrenamientos = computed(() => {
    const texto = this.filtroTexto().trim().toLowerCase();
    const categoria = this.filtroCategoria();

    return this.entrenamientoService.entrenamientos().filter((e) => {
      const coincideTexto =
        !texto ||
        e.titulo.toLowerCase().includes(texto) ||
        e.descripcion.toLowerCase().includes(texto);
      const coincideCategoria = !categoria || e.categoria === categoria;
      return coincideTexto && coincideCategoria;
    });
  });

  readonly selectedEntrenamiento = signal<Entrenamiento | null>(null);

  constructor() {
    // Carga inicial desde la API al arrancar la app
    this.entrenamientoService.cargar();
  }

  applyFilter(filtro: FiltroEntrenamientos): void {
    this.filtroTexto.set(filtro.text);
    this.filtroCategoria.set(filtro.categoria);
  }

  resetFilter(): void {
    this.filtroTexto.set('');
    this.filtroCategoria.set('');
    this.selectedEntrenamiento.set(null);
  }

  // ----Reintento y creación de prueba (POST) ----
  reintentar(): void {
    this.entrenamientoService.reintentar();
  }

  crearPrueba(): void {
    const nuevo: NuevoEntrenamiento = {
      titulo: `Entrenamiento de prueba ${new Date().toLocaleTimeString()}`,
      descripcion: 'Creado desde la interfaz para probar el POST del servicio.',
      categoria: 'combinado',
      fecha: new Date().toISOString().slice(0, 10),
      estado: 'pendiente',
      duracionMinutos: 30,
      destacado: false
    };
    this.entrenamientoService.crear(nuevo);
  }
}