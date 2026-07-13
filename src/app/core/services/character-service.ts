import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Character } from '../models/Character';
import { CharacterResponse } from '../interfaces/character-response.interface';
@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private http = inject(HttpClient);
  apiUrl = environment.apiUrl;
//get all characters
  getAllCharacters(page: number = 1) {
    return this.http.get<CharacterResponse>(`${this.apiUrl}/characters?page=${page}`);
  }

  //get character by id
  getCharacterById(id: number) {
    return this.http.get<Character>(`${this.apiUrl}/characters/${id}`);
  }
}
