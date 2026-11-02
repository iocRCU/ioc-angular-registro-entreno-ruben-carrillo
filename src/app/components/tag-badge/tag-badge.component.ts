import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-badge',
  standalone: true,
  templateUrl: './tag-badge.component.html',
  styleUrl: './tag-badge.component.scss'
})
export class TagBadge {
  @Input({ required: true }) categoria!: string;
}