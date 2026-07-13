import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { LocationService } from 'src/app/core/services/location-service';
import { Location } from 'src/app/core/models/Location';
import { LocationResponse } from 'src/app/core/interfaces/location-response.interface';
import { IMAGE_CONSTANTS } from 'src/app/core/constants/image.constants';
import { ImageSize } from 'src/app/core/enums/image-size.enum';
import { CardComponent } from 'src/app/shared/components/card/card.component';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
  standalone: true,
 imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    HeaderComponent,
    IonGrid,
    IonRow,
    IonCol,
    CardComponent
    
  ]})
export class LocationsPage implements OnInit {
 protected readonly IMAGE_CONSTANTS = IMAGE_CONSTANTS;
  protected readonly ImageSize = ImageSize;
  Locations: Location[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit() {  
    this.locationService.getAllLocations().subscribe((response: LocationResponse) => {
      this.Locations = response.results;
      console.log(response.results);
    } );
  }

}

