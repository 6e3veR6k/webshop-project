import { Component, EventEmitter, Output } from '@angular/core';
import { count } from "rxjs";


@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  @Output()columnsCountChange: EventEmitter<number> = new EventEmitter<number>();
  sort: string = 'desc';
  itemsCount: number = 1;


  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }


  onItemsUpdated(count: number): void {
    this.itemsCount = count;
  }


  onColumnsCount(columnsNumber: number): void {
    this.columnsCountChange.emit(columnsNumber);
    console.log('clicked');
  }
}
