import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  imports: [],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
})
export class SortComponent {
  @Output() sortChange = new EventEmitter<string>();

  applySort(sortType: string) {
    this.sortChange.emit(sortType);
  }
}
