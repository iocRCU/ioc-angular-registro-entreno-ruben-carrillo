import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrenamientoCard } from './entrenamiento-card.component';
import { Entrenamiento } from '../../models/entrenamiento.model';

describe('EntrenamientoCard', () => {
  let component: EntrenamientoCard;
  let fixture: ComponentFixture<EntrenamientoCard>;

  const MOCK: Entrenamiento = {
    id: 1,
    titulo: 'Pierna intensa',
    descripcion: 'Sesión de fuerza centrada en cuadríceps y glúteos.',
    categoria: 'fuerza',
    fecha: '2026-10-15',
    estado: 'completado',
    duracionMinutos: 75,
    destacado: true
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenamientoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(EntrenamientoCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('entrenamiento', MOCK);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});