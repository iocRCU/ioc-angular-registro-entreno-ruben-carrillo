import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entrenamiento } from '../../models/entrenamiento.model';
import { TagBadge } from '../tag-badge/tag-badge.component';

@Component({
  imports: [TagBadge],
  selector: 'app-entrenamiento-list',
  standalone: true,
  templateUrl: './entrenamiento-list.component.html',
  styleUrl: './entrenamiento-list.component.scss'
})
export class EntrenamientoList {
  @Input() entrenamientos: Entrenamiento[] = [];
  @Output() selectEntrenamiento = new EventEmitter<Entrenamiento>();

  select(entrenamiento: Entrenamiento) {
    this.selectEntrenamiento.emit(entrenamiento);
  }
}