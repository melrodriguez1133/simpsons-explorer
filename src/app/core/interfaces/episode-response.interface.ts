import {Episode} from '../models/Episode';

export interface EpisodeResponse {
  count: number;
  next: string;
  prev: string;
  pages: number;
  results: Episode[];
}