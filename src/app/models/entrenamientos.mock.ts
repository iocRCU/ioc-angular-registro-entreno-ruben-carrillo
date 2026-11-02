import { Entrenamiento } from './entrenamiento.model';

export const ENTRENAMIENTOS_MOCK: Entrenamiento[] = [
  {
    id: 1,
    titulo: 'Pierna intensa',
    descripcion: 'Sesión de fuerza centrada en cuadríceps y glúteos con sentadillas y peso muerto.',
    categoria: 'fuerza',
    fecha: '2026-10-15',
    duracionMinutos: 75,
    destacado: true
  },
  {
    id: 2,
    titulo: 'Running 5km',
    descripcion: 'Corrida continua en ruta a ritmo moderado.',
    categoria: 'cardio',
    fecha: '2026-10-16',
    duracionMinutos: 30,
    destacado: false
  },
  {
    id: 3,
    titulo: 'Yoga matutino',
    descripcion: 'Secuencia de asanas para mejorar flexibilidad y movilidad.',
    categoria: 'flexibilidad',
    fecha: '2026-10-17',
    duracionMinutos: 45,
    destacado: false
  },
  {
    id: 4,
    titulo: 'Torso y espalda',
    descripcion: 'Trabajo de press de banca, dominadas y remos.',
    categoria: 'fuerza',
    fecha: '2026-10-18',
    duracionMinutos: 80,
    destacado: true
  },
  {
    id: 5,
    titulo: 'Descanso activo',
    descripcion: 'Caminata ligera y estiramientos suaves.',
    categoria: 'descanso',
    fecha: '2026-10-19',
    duracionMinutos: 20,
    destacado: false
  },
  {
    id: 6,
    titulo: 'HIIT 20 min',
    descripcion: 'Intervalos de alta intensidad con ejercicios de calistenia.',
    categoria: 'combinado',
    fecha: '2026-10-20',
    duracionMinutos: 20,
    destacado: false
  },
  {
    id: 7,
    titulo: 'Bicicleta ruta',
    descripcion: 'Salida en bicicleta por carretera con desnivel moderado.',
    categoria: 'cardio',
    fecha: '2026-10-21',
    duracionMinutos: 90,
    destacado: false
  },
  {
    id: 8,
    titulo: 'Core y estabilidad',
    descripcion: 'Planchas, russian twists y ejercicios de equilibrio.',
    categoria: 'fuerza',
    fecha: '2026-10-22',
    duracionMinutos: 35,
    destacado: false
  },
  {
    id: 9,
    titulo: 'Estiramientos profundos',
    descripcion: 'Sesión dedicada a mejora de rango de movimiento.',
    categoria: 'flexibilidad',
    fecha: '2026-10-23',
    duracionMinutos: 40,
    destacado: false
  },
  {
    id: 10,
    titulo: 'Full body circuit',
    descripcion: 'Circuito combinando fuerza y cardio en estaciones.',
    categoria: 'combinado',
    fecha: '2026-10-24',
    duracionMinutos: 55,
    destacado: true
  },
  {
    id: 11,
    titulo: 'Natación técnica',
    descripcion: 'Sesión en piscina con énfasis en técnica de brazada.',
    categoria: 'cardio',
    fecha: '2026-10-25',
    duracionMinutos: 50,
    destacado: false
  },
  {
    id: 12,
    titulo: 'Descanso total',
    descripcion: 'Día sin actividad física planificada.',
    categoria: 'descanso',
    fecha: '2026-10-26',
    duracionMinutos: 0,
    destacado: false
  }
];