import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['shoes', 'sports', 'blazers']


  onShowCategory(category: string): void {
    this.showCategory.emit(category);
    console.log('filter category: ' + category);
  }
}
