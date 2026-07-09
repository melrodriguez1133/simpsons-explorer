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
} from '@ionic/angular/standalone';
import {HeaderComponent} from 'src/app/shared/components/header/header.component';
import { CharacterService } from 'src/app/core/services/character-service';
import { Character } from 'src/app/core/models/Character';
import { CharacterResponse } from 'src/app/core/interfaces/character-response.interface';
import {CardComponent} from 'src/app/shared/components/card/card.component';
import {IMAGE_CONSTANTS} from 'src/app/core/constants/image.constants';
import {ImageSize} from 'src/app/core/enums/image-size.enum';

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
    CardComponent
  ],
})
export class CharactersPage implements OnInit {
  protected readonly IMAGE_CONSTANTS = IMAGE_CONSTANTS;
  protected readonly ImageSize = ImageSize;
  Characters: Character[] = [];
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getAllCharacters().subscribe((data: CharacterResponse) => {
      this.Characters = data.results;
      console.log(this.Characters);
    });
  }

}

