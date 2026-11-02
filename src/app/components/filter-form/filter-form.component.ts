import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltroEntrenamientos } from '../../models/filtro.model';

@Component({
  imports: [FormsModule],
  selector: 'app-filter-form',
  standalone: true,
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.scss'
})
export class FilterForm {
  @Output() filterChange = new EventEmitter<FiltroEntrenamientos>();
  @Output() resetChange = new EventEmitter<void>();

  readonly MIN_LENGTH = 2;
  readonly categorias = ['fuerza', 'cardio', 'flexibilidad', 'descanso', 'combinado'];

  searchText = '';
  categoria = '';

  onSearchChange(valor: string): void {
    this.searchText = valor;
    this.emitFilter();
  }

  onCategoriaChange(valor: string): void {
    this.categoria = valor;
    this.emitFilter();
  }

  emitFilter(): void {
    this.filterChange.emit({ text: this.searchText, categoria: this.categoria });
  }

  reset(): void {
    this.searchText = '';
    this.categoria = '';
    this.resetChange.emit();
    this.emitFilter();
  }
}