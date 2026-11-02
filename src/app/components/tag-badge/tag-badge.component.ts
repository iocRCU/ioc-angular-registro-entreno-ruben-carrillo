import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-badge',
  standalone: true,
  template: `
    <span class="badge" [class]="'badge-' + categoria">
      {{ categoria }}
    </span>
  `,
  styles: [`
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 0.85rem;
      font-weight: bold;
      text-transform: capitalize;
    }
    .badge-fuerza { background-color: #e74c3c; color: white; }
    .badge-cardio { background-color: #3498db; color: white; }
    .badge-flexibilidad { background-color: #9b59b6; color: white; }
    .badge-descanso { background-color: #95a5a6; color: white; }
    .badge-combinado { background-color: #e67e22; color: white; }
  `]
})
export class TagBadge {
  @Input() categoria: string = '';
}