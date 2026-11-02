import { Component, Input } from '@angular/core';
import { Entrenamiento } from '../../models/entrenamiento.model';
import { TagBadge } from '../tag-badge/tag-badge.component';

@Component({
  imports: [TagBadge],
  selector: 'app-entrenamiento-card',
  standalone: true,
  templateUrl: './entrenamiento-card.component.html',
  styleUrl: './entrenamiento-card.component.scss'
})
export class EntrenamientoCard {
  @Input() entrenamiento: Entrenamiento | null = null;
}