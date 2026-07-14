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
  IonCol,
  IonSearchbar
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
    CardComponent,
    IonSearchbar
    
  ]})
export class LocationsPage implements OnInit {
 protected readonly IMAGE_CONSTANTS = IMAGE_CONSTANTS;
  protected readonly ImageSize = ImageSize;
  Locations: Location[] = [];

  //filtros
  filteredLocations:Location[]=[];
  paginatedLocations:Location[]=[];
  //paginacion
  currentPage=1;
  totalPages=1;
  itemsPerPage=20;

  constructor(private locationService: LocationService) { }

ngOnInit() {
  this.locationService.getAllLocations().subscribe({
    next: (response: LocationResponse) => {

      console.log('Respuesta completa:', response);

      console.log('Cantidad de registros:', response.results.length);

      console.log('Total de páginas:', response.pages);

      this.Locations = response.results;
      this.filteredLocations = [...this.Locations];

      this.totalPages = Math.ceil(
        this.filteredLocations.length / this.itemsPerPage
      );

      console.log('Total páginas Front:', this.totalPages);

      this.updatePagination();

    }
  });
} 
updatePagination(): void {

  const start = (this.currentPage - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;

  console.log('Página:', this.currentPage);
  console.log('Inicio:', start);
  console.log('Fin:', end);

  this.paginatedLocations = this.filteredLocations.slice(start, end);

  console.log('Registros mostrados:', this.paginatedLocations.length);

}
 nextPage(): void {

  if (this.currentPage < this.totalPages) {

    this.currentPage++;

    this.updatePagination();

  }

}
previousPage(): void {

  if (this.currentPage > 1) {

    this.currentPage--;

    this.updatePagination();

  }

}
onSearch(event: Event): void {

  const value = (event.target as HTMLIonSearchbarElement)
    .value
    ?.trim()
    .toLowerCase() ?? '';

  if (!value) {

    this.filteredLocations = [...this.Locations];

  } else {

    this.filteredLocations = this.Locations.filter(location =>

      location.name.toLowerCase().includes(value) ||

      location.town.toLowerCase().includes(value)

    );

  }

  this.currentPage = 1;

  this.totalPages = Math.ceil(

    this.filteredLocations.length / this.itemsPerPage

  );

  this.updatePagination();

}

}

