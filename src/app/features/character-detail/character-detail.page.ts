import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonSpinner
} from '@ionic/angular/standalone';

import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { CharacterService } from 'src/app/core/services/character-service';
import { Character } from 'src/app/core/models/Character';
import { IMAGE_CONSTANTS } from 'src/app/core/constants/image.constants';
import { ImageSize } from 'src/app/core/enums/image-size.enum';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonButton,
    IonIcon,
    IonSpinner,
    HeaderComponent
  ]
})
export class CharacterDetailPage implements OnInit {
  character?: Character;
  isLoading = true;

  protected readonly IMAGE_CONSTANTS = IMAGE_CONSTANTS;
  protected readonly ImageSize = ImageSize;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.characterService.getCharacterById(id).subscribe({
      next: (character: Character) => {
        this.character = character;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}