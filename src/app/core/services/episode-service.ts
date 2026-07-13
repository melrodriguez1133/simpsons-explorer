import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Episode } from '../models/Episode';
import {EpisodeResponse} from '../interfaces/episode-response.interface';
@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
   apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  //get all episodes
  getAllEpisodes(page: number = 1) {
    return this.http.get<EpisodeResponse>(`${this.apiUrl}/episodes?page=${page}`);
  }
//get episode by id
  getEpisodeById(id: number) {
    return this.http.get<Episode>(`${this.apiUrl}/episodes/${id}`);
  }

}
