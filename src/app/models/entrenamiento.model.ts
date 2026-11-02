export interface Entrenamiento {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: 'fuerza' | 'cardio' | 'flexibilidad' | 'descanso' | 'combinado';
  fecha: string;
  duracionMinutos: number;
  destacado: boolean;
}