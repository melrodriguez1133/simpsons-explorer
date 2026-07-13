import { Component, OnInit, Input,Output} from '@angular/core';
import { IonButton, IonButtons, IonIcon,IonCard } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  chevronForwardOutline,
  chevronBackOutline
} from 'ionicons/icons';
 @Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  imports: [IonButton, IonButtons, IonIcon, CommonModule,IonCard],
})
export class PaginationComponent  implements OnInit {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
     addIcons({
       chevronForwardOutline,
  chevronBackOutline
    });
   }

  ngOnInit() {}

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }

  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

}
