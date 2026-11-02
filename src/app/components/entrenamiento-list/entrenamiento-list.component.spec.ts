import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrenamientoList } from './entrenamiento-list.component';

describe('EntrenamientoList', () => {
  let component: EntrenamientoList;
  let fixture: ComponentFixture<EntrenamientoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenamientoList],
    }).compileComponents();

    fixture = TestBed.createComponent(EntrenamientoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
