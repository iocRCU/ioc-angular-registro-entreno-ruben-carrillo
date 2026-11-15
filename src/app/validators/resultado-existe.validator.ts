import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, timer, switchMap, of, map, catchError } from 'rxjs';
import { EntrenamientoService } from '../services/entrenamiento.service';

/**
 * Validador asíncrono: comprueba si el término de búsqueda
 * tiene resultados en la API.
 *
 * El timer(350) actúa como debounce: si el usuario teclea rápido,
 * Angular cancela la validación anterior y solo la última llega
 * a consultarse, evitando peticiones HTTP en cascada.
 */
export function resultadoExisteValidator(service: EntrenamientoService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const termino = (control.value ?? '').toString().trim();
    if (termino.length < 3) {
      return of(null); // no consultamos la API para términos demasiado cortos
    }
    return timer(350).pipe(
      switchMap(() => service.tieneResultados(termino)),
      map((hayResultados) => (hayResultados ? null : { sinResultados: true })),
      catchError(() => of(null)) // si la API falla, no bloqueamos el formulario
    );
  };
}