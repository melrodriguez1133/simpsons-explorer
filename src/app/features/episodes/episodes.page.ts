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
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { EpisodeService } from 'src/app/core/services/episode-service';
import { Episode } from 'src/app/core/models/Episode';
import { EpisodeResponse } from 'src/app/core/interfaces/episode-response.interface';
import {CardComponent} from 'src/app/shared/components/card/card.component';
import {IMAGE_CONSTANTS} from 'src/app/core/constants/image.constants';
import {ImageSize} from 'src/app/core/enums/image-size.enum';
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
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
    
  ]
})
export class EpisodesPage implements OnInit {
  protected readonly IMAGE_CONSTANTS = IMAGE_CONSTANTS;
  protected readonly ImageSize = ImageSize;
  
  Episodes: Episode[] = [];
  constructor(private episodeService: EpisodeService) { }

  ngOnInit() {
    this.episodeService.getAllEpisodes().subscribe((response: EpisodeResponse) => {
      this.Episodes = response.results;
      console.log(this.Episodes);
    });
  }
}