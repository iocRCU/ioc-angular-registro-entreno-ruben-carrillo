import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-filter-form',
  standalone: true,
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.scss'
})
export class FilterForm implements OnInit {
  @Output() filterChange = new EventEmitter<{ text: string; categoria: string }>();
  @Output() resetChange = new EventEmitter<void>();

  searchText: string = '';
  categoria: string = '';
  categorias: string[] = ['', 'fuerza', 'cardio', 'flexibilidad', 'descanso', 'combinado'];

  ngOnInit() {
    this.emitFilter();
  }

  onInputChange() {
    this.emitFilter();
  }

  emitFilter() {
    this.filterChange.emit({ text: this.searchText, categoria: this.categoria });
  }

  reset() {
    this.searchText = '';
    this.categoria = '';
    this.resetChange.emit();
    this.emitFilter();
  }
}