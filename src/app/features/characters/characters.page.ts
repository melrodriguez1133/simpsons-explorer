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
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,      
  IonSearchbar,                                     
  IonText
} from '@ionic/angular/standalone';
import {HeaderComponent} from 'src/app/shared/components/header/header.component';
import { CharacterService } from 'src/app/core/services/character-service';
import { Character } from 'src/app/core/models/Character';
import { CharacterResponse } from 'src/app/core/interfaces/character-response.interface';
import {CardComponent} from 'src/app/shared/components/card/card.component';
import {IMAGE_CONSTANTS} from 'src/app/core/constants/image.constants';
import {ImageSize} from 'src/app/core/enums/image-size.enum';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
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
    HeaderComponent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    CardComponent,
    RouterLink,
    PaginationComponent,
    IonSearchbar,
    IonText
  ],
})
export class CharactersPage implements OnInit {

  //Images
  protected readonly IMAGE_CONSTANTS = IMAGE_CONSTANTS;
  protected readonly ImageSize = ImageSize;
  Characters: Character[] = [];

  //Filtros
  filteredCharacters:Character[]=[]
  searchText: string ='';
  //Pagination
  currentPage: number = 1;
  totalPages: number = 1;       
  totalCharacters: number = 0;


  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.loadCharacters(this.currentPage);
  }
  
  loadCharacters(page: number) {
    this.characterService.getAllCharacters(page).subscribe((data: CharacterResponse) => {
      this.Characters = data.results;
      this.filteredCharacters=[...this.Characters];
      this.totalPages = data.pages;
      this.totalCharacters = data.count;
      console.log(this.Characters);
      console.log(`Current Page: ${this.currentPage}, Total Pages: ${this.totalPages}, Total Characters: ${this.totalCharacters}`);
      console.log(data);
    });
}

onSearch(event:Event){
  const value = (event.target as HTMLIonSearchbarElement)
   .value
   ?.trim()
   .toLowerCase()??'';

   if(!value){
    this.filteredCharacters=[...this.Characters];
    return
   }
   this.filteredCharacters=this.Characters.filter(Character => 
     Character.name.toLowerCase().includes(value)
   );
}
}
