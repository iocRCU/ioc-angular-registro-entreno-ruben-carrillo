import { Component, OnInit, inject, signal, Output, EventEmitter  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { resultadoExisteValidator } from '../../validators/resultado-existe.validator';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { FiltroEntrenamientos } from '../../models/filtro.model';

const HISTORIAL_KEY = 'ttracker_historial_busquedas';
const HISTORIAL_MAX = 5;

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-filter-form',
  standalone: true,
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.scss'
})
export class FilterForm implements OnInit {
  private readonly entrenamientoService = inject(EntrenamientoService);

  readonly categorias = ['fuerza', 'cardio', 'flexibilidad', 'descanso', 'combinado'];

  // ---- Salidas hacia el componente padre (App), igual que en ra2 ----
  @Output() filterChange = new EventEmitter<FiltroEntrenamientos>();
  @Output() resetChange = new EventEmitter<void>();
  
  // ---- Formulario reactivo ----
  readonly form = new FormGroup({
    texto: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],        // validación SÍNCRONA
      asyncValidators: [resultadoExisteValidator(this.entrenamientoService)] // validación ASÍNCRONA
    }),
    categoria: new FormControl('', { nonNullable: true })
  });

  // ---- Historial de búsquedas (localStorage) ----
  readonly historial = signal<string[]>([]);

  ngOnInit(): void {
    this.cargarHistorial();

    // Cada vez que el estado del formulario se recalcula y queda VÁLIDO,
    // emitimos los criterios hacia el componente padre (App).
    // (Las validaciones asíncronas ya llevan su debounce de 350 ms.)
    this.form.statusChanges.subscribe((estado) => {
      if (estado === 'VALID') {
        this.emitirFiltro();
      }
    });
  }

  /** Envío manual con el botón Buscar. */
  buscarManual(): void {
    if (this.form.valid && !this.form.pending) {
      this.emitirFiltro();
    }
  }

  /** Botón Limpiar: resetea el formulario y avisa al padre. */
  limpiar(): void {
    this.form.reset({ texto: '', categoria: '' });
    this.resetChange.emit();
  }

  /** Recupera una búsqueda del historial. */
  recuperarBusqueda(termino: string): void {
    this.form.setValue({ texto: termino, categoria: '' });
  }

  private emitirFiltro(): void {
    const texto = this.form.controls.texto.value.trim();
    const categoria = this.form.controls.categoria.value;
    this.filterChange.emit({ text: texto, categoria });
    if (texto) {
      this.guardarTermino(texto);
    }
  }

  // ---- Persistencia del historial con try/catch ----

  private cargarHistorial(): void {
    try {
      const crudo = localStorage.getItem(HISTORIAL_KEY);
      this.historial.set(crudo ? (JSON.parse(crudo) as string[]) : []);
    } catch {
      this.historial.set([]); // localStorage corrupto o no disponible
    }
  }

  private guardarTermino(termino: string): void {
    try {
      const limpio = termino.trim();
      if (!limpio) return;
      // Sin duplicados (y por tanto sin duplicados consecutivos);
      // el término repetido sube al frente como búsqueda más reciente
      const restantes = this.historial().filter(
        (t) => t.toLowerCase() !== limpio.toLowerCase()
      );
      const nuevaLista = [limpio, ...restantes].slice(0, HISTORIAL_MAX);
      this.historial.set(nuevaLista);
      localStorage.setItem(HISTORIAL_KEY, JSON.stringify(nuevaLista));
    } catch {
      // localStorage no disponible (modo privado, cuota…): se ignora sin romper la app
    }
  }
}