import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedDate',
  standalone: true
})
export class FormattedDatePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    try {
      const date = new Date(value);
      return date.toLocaleDateString('ca-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return value;
    }
  }
}