import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonSpinner
} from '@ionic/angular/standalone';

import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { EpisodeService } from 'src/app/core/services/episode-service';
import { Episode } from 'src/app/core/models/Episode';
import { IMAGE_CONSTANTS } from 'src/app/core/constants/image.constants';
import { ImageSize } from 'src/app/core/enums/image-size.enum';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.page.html',
  styleUrls: ['./episode-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonButton,
    IonSpinner,
    HeaderComponent
  ]
})
export class EpisodeDetailPage implements OnInit {
  episode?: Episode;
  isLoading = true;

  protected readonly IMAGE_CONSTANTS = IMAGE_CONSTANTS;
  protected readonly ImageSize = ImageSize;

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.episodeService.getEpisodeById(id).subscribe({
      next: (episode: Episode) => {
        this.episode = episode;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}