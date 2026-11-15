/**
 * Representa la respuesta EXACTA de la API (json-server).
 * Campos deliberadamente permisivos: la API podría devolver
 * números como texto, textos vacíos o campos que faltan.
 */
export interface EntrenamientoApi {
  id: number;
  titulo?: string;
  descripcion?: string;
  categoria?: string;
  fecha?: string;
  estado?: string;
  duracionMinutos?: number | string;
  destacado?: boolean;
}