import {Character} from '../models/Character';

export interface CharacterResponse {
  count: number;
  next: string;
  prev: string;
  pages: number;
  results: Character[];
}