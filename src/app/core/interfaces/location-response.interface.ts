import {Location} from '../models/Location';
export interface LocationResponse {
  count: number;
  next: string;
  prev: string;
  pages: number;
  results: Location[];
}