/** Categorías válidas de TTracker. */
export type Categoria = 'fuerza' | 'cardio' | 'flexibilidad' | 'descanso' | 'combinado';

/** Estado de un entrenamiento. */
export type EstadoEntrenamiento = 'completado' | 'recuperacion' | 'pendiente';


export interface Entrenamiento {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: Categoria;
  fecha: string;
  duracionMinutos: number;
  destacado: boolean;
  estado: EstadoEntrenamiento;
}