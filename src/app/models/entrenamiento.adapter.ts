import { EntrenamientoApi } from './entrenamiento-api.model';
import { Entrenamiento, Categoria, EstadoEntrenamiento } from './entrenamiento.model';

const CATEGORIAS_VALIDAS: Categoria[] = ['fuerza', 'cardio', 'flexibilidad', 'descanso', 'combinado'];
const ESTADOS_VALIDOS: EstadoEntrenamiento[] = ['completado', 'recuperacion', 'pendiente'];

/** Convierte cualquier valor a número de forma segura; 0 si no es posible. */
function aNumero(valor: number | string | undefined): number {
  if (typeof valor === 'number') return valor;
  if (typeof valor === 'string') {
    const parsed = Number(valor.trim());
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

/** Normaliza una categoría/estado: trim, minúsculas y valor por defecto si no es válido. */
function normalizarEnumeracion<T extends string>(valor: string | undefined, validos: T[], porDefecto: T): T {
  const limpio = (valor ?? '').trim().toLowerCase() as T;
  return validos.includes(limpio) ? limpio : porDefecto;
}

/** Normaliza una fecha a formato ISO yyyy-MM-dd; hoy si falta o es inválida. */
function normalizarFecha(valor: string | undefined): string {
  if (!valor) return new Date().toISOString().slice(0, 10);
  const fecha = new Date(valor);
  return Number.isNaN(fecha.getTime())
    ? new Date().toISOString().slice(0, 10)
    : fecha.toISOString().slice(0, 10);
}

/**
 * Adaptador: transforma la respuesta de la API al modelo interno.
 * La app NUNCA recibe EntrenamientoApi directamente.
 */
export function adaptarEntrenamiento(api: EntrenamientoApi): Entrenamiento {
  return {
    id: api.id,
    titulo: (api.titulo ?? '').trim() || 'Entrenamiento sin título',
    descripcion: (api.descripcion ?? '').trim() || 'Sin descripción',
    categoria: normalizarEnumeracion(api.categoria, CATEGORIAS_VALIDAS, 'combinado'),
    fecha: normalizarFecha(api.fecha),
    estado: normalizarEnumeracion(api.estado, ESTADOS_VALIDOS, 'pendiente'),
    duracionMinutos: aNumero(api.duracionMinutos),
    destacado: api.destacado === true
  };
}