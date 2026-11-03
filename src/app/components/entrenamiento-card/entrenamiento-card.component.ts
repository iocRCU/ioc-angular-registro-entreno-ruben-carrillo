import { Component, Input } from '@angular/core';
import { Entrenamiento } from '../../models/entrenamiento.model';
import { TagBadge } from '../tag-badge/tag-badge.component';
import { FormattedDatePipe } from '../../pipes/formatted-date.pipe';

@Component({
  imports: [TagBadge, FormattedDatePipe],
  selector: 'app-entrenamiento-card',
  standalone: true,
  templateUrl: './entrenamiento-card.component.html',
  styleUrl: './entrenamiento-card.component.scss'
})
export class EntrenamientoCard {
  @Input({ required: true }) entrenamiento!: Entrenamiento;
}