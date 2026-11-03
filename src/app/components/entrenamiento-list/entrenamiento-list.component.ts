import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entrenamiento } from '../../models/entrenamiento.model';
import { TagBadge } from '../tag-badge/tag-badge.component';
import { FormattedDatePipe } from '../../pipes/formatted-date.pipe';

@Component({
  imports: [TagBadge, FormattedDatePipe],
  selector: 'app-entrenamiento-list',
  standalone: true,
  templateUrl: './entrenamiento-list.component.html',
  styleUrl: './entrenamiento-list.component.scss'
})
export class EntrenamientoList {
  @Input() entrenamientos: Entrenamiento[] = [];
  @Output() selectEntrenamiento = new EventEmitter<Entrenamiento>();

  get count(): number {
    return this.entrenamientos.length;
  }

  select(entrenamiento: Entrenamiento) {
    this.selectEntrenamiento.emit(entrenamiento);
  }
}