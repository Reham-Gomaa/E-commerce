import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  imports: [],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
})
export class SortComponent {
  @Output() sortChange = new EventEmitter<string>();
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  applySort(sortType: string) {
    this.sortChange.emit(sortType);
    this.isDropdownOpen = false; // Close dropdown after selection
  }
}
