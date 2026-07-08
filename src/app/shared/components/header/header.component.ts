import { Component, OnInit,Input } from '@angular/core';
import { IonHeader,IonToolbar,IonButtons,IonMenuButton ,IonTitle} from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader,IonToolbar,IonButtons,IonMenuButton ,IonTitle],
})
export class HeaderComponent  implements OnInit {
@Input() title: string = "Simpsons Explorer";
  constructor() { }

  ngOnInit() {}

}
