import { Component, OnInit ,Input} from '@angular/core';
import { IonCard,IonImg, IonTitle, IonCardHeader, IonCardSubtitle, IonCardContent,IonCardTitle} from "@ionic/angular/standalone";
import { UppercasePipe } from '../../pipes/uppercase-pipe';
import { DatePipe } from '../../pipes/date-pipe';
import { calculateAge } from '../../utils/age.util';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonCard, IonImg, IonTitle, IonCardHeader, IonCardSubtitle, IonCardContent,IonCardTitle,UppercasePipe, DatePipe],
})
export class CardComponent  implements OnInit {
age: number = 0;

  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() description: string = "";
  @Input() date: Date = new Date('1987-04-19');
  constructor() { }

  ngOnInit() {
    this.age = calculateAge(this.date);
  }

}
