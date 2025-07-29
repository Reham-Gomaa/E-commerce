import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-by-name',
  imports: [FormsModule],
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.scss',
})
export class SearchByNameComponent {
  searchKey: string = '';
  @Output() key: EventEmitter<string> = new EventEmitter();

  search(): void {
    this.key.emit(this.searchKey);
  }
}
