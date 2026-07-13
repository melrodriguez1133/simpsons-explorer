import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import {CharacterService} from 'src/app/core/services/character-service';
import { LocationService } from 'src/app/core/services/location-service';
import {EpisodeService} from 'src/app/core/services/episode-service';
import { Location } from 'src/app/core/models/Location';
import { LocationResponse } from 'src/app/core/interfaces/location-response.interface';
import { IMAGE_CONSTANTS } from 'src/app/core/constants/image.constants';
import { ImageSize } from 'src/app/core/enums/image-size.enum';
import { Character } from 'src/app/core/models/Character';  
import { CharacterResponse } from 'src/app/core/interfaces/character-response.interface';
import { Episode } from 'src/app/core/models/Episode';
import { EpisodeResponse } from 'src/app/core/interfaces/episode-response.interface';
  @Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
imports: [
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  CommonModule,
  FormsModule,
  IonGrid,
  IonRow,
  IonCol,
  HeaderComponent,
  CardComponent
]
})
export class HomePage implements OnInit {
  Locations: Location[] = [];
  Characters: Character[] = []
  Episodes: Episode[] = [];
  protected readonly IMAGE_CONSTANTS = IMAGE_CONSTANTS
  protected readonly ImageSize = ImageSize;
  constructor(
    private locationService: LocationService,
    private characterService: CharacterService,
    private episodeService: EpisodeService
  ) { }

  ngOnInit() {
this.locationService.getAllLocations().subscribe((response: LocationResponse) => {
  this.Locations = response.results.slice(0, 5);
  console.log(this.Locations);
});

this.characterService.getAllCharacters().subscribe((response: CharacterResponse) => {
  this.Characters = response.results.slice(0, 5);
  console.log(this.Characters);
});

this.episodeService.getAllEpisodes().subscribe((response: EpisodeResponse) => {
  this.Episodes = response.results.slice(0, 5);
  console.log(this.Episodes);
});
  }

}
