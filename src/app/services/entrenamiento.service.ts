import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, switchMap, tap, map, catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { EntrenamientoApi } from '../models/entrenamiento-api.model';
import { Entrenamiento } from '../models/entrenamiento.model';
import { adaptarEntrenamiento } from '../models/entrenamiento.adapter';

/** Datos necesarios para crear un entrenamiento nuevo (el id lo genera la API). */
export type NuevoEntrenamiento = Omit<Entrenamiento, 'id'>;

@Injectable({ providedIn: 'root' })
export class EntrenamientoService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/entrenamientos`;

  /** Canales que disparan operaciones (GET / POST). */
  private readonly recargas$ = new Subject<void>();
  private readonly creaciones$ = new Subject<NuevoEntrenamiento>();

  /** Estado expuesto a la vista. */
  readonly entrenamientos = signal<Entrenamiento[]>([]);
  readonly cargando = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  constructor() {
    // ---- FLUJO DE CARGA (GET) con switchMap ----
    this.recargas$
      .pipe(
        tap(() => {
          this.cargando.set(true);
          this.error.set(null);
        }),
        // switchMap: si llega otra recarga, cancela la petición anterior
        switchMap(() =>
          this.http.get<EntrenamientoApi[]>(this.apiUrl).pipe(
            //delay(2000),
            map((lista) => lista.map(adaptarEntrenamiento)),
            catchError(() => {
              this.error.set('No se ha podido cargar los entrenamientos desde la API.');
              return of<Entrenamiento[]>([]);
            })
          )
        )
      )
      .subscribe((lista) => {
        this.entrenamientos.set(lista);
        this.cargando.set(false);
      });

    // ---- FLUJO DE CREACIÓN (POST) con switchMap ----
    this.creaciones$
      .pipe(
        tap(() => {
          this.cargando.set(true);
          this.error.set(null);
        }),
        switchMap((nuevo) =>
          this.http.post<EntrenamientoApi>(this.apiUrl, nuevo).pipe(
            map(adaptarEntrenamiento),
            catchError(() => {
              this.error.set('No se ha podido crear el entrenamiento.');
              return of<NuevoEntrenamiento | null>(null);
            })
          )
        )
      )
      .subscribe((creado) => {
        if (creado) {
          this.entrenamientos.update((lista) => [...lista, creado as Entrenamiento]);
        }
        this.cargando.set(false);
      });
  }

  /** Dispara una carga inicial o una recarga del listado. */
  cargar(): void {
    this.recargas$.next();
  }

  /** Reintenta la última consulta (vuelve a disparar el mismo flujo GET). */
  reintentar(): void {
    this.recargas$.next();
  }

  /** Crea un entrenamiento nuevo vía POST. */
  crear(datos: NuevoEntrenamiento): void {
    this.creaciones$.next(datos);
  }
}