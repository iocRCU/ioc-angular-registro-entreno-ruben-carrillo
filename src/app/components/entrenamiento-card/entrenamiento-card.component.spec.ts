import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrenamientoCard } from './entrenamiento-card.component';

describe('EntrenamientoCard', () => {
  let component: EntrenamientoCard;
  let fixture: ComponentFixture<EntrenamientoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenamientoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(EntrenamientoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
