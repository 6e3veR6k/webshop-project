import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  columnsPerRow = 3;
  category!: string;

  onColumnsCountChanged(colsNumber: number) {
    this.columnsPerRow = colsNumber;

  }


  onShowCategory($event: string) {
    this.category = $event;
  }
}
