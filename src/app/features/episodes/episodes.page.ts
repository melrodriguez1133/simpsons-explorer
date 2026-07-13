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
   InfiniteScrollCustomEvent,
  IonAvatar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { EpisodeService } from 'src/app/core/services/episode-service';
import { Episode } from 'src/app/core/models/Episode';
import { EpisodeResponse } from 'src/app/core/interfaces/episode-response.interface';
import {CardComponent} from 'src/app/shared/components/card/card.component';
import {IMAGE_CONSTANTS} from 'src/app/core/constants/image.constants';
import {ImageSize} from 'src/app/core/enums/image-size.enum';
import { RouterLink } from '@angular/router';
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
    CardComponent,
    RouterLink,
  IonAvatar,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
    
  ]
})
export class EpisodesPage implements OnInit {
  //images
  protected readonly IMAGE_CONSTANTS = IMAGE_CONSTANTS;
  protected readonly ImageSize = ImageSize;
  
  Episodes: Episode[] = [];

  //scroll infinit
currentPage = 1;
totalPages = 1;
isLoading = false;

constructor(private episodeService: EpisodeService) { }

  ngOnInit() {
    this.loadEpisodes();

  }
  
  loadEpisodes(page:number = 1):void{
    this.episodeService.getAllEpisodes(page).subscribe({
      next:(response)=>{
        this.Episodes=response.results;
        this.currentPage = page;
        this.totalPages=response.pages;
      }
    })
  }
 
  onIonInfinite(event: InfiniteScrollCustomEvent) {
    //verificar si ya es la ultima pag
    if (this.currentPage >= this.totalPages) {

    event.target.disabled = true;
    event.target.complete();

    return;
   
  }
  // Avanzamos a la siguiente página
  this.currentPage++;

   // Descargamos los nuevos episodios
  this.episodeService.getAllEpisodes(this.currentPage).subscribe({

    next: (response: EpisodeResponse) => {

      // Agregamos los nuevos episodios sin perder los anteriores
      this.Episodes = [

        ...this.Episodes,

        ...response.results

      ];

      // Actualizamos el total de páginas
      this.totalPages = response.pages;

      // Finalizamos el Infinite Scroll
      event.target.complete();

    },

    error: (error) => {

      console.error(error);

      // Siempre debemos finalizar el evento
      event.target.complete();

    }

  });

}
}