import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Location } from '../models/Location';
import { LocationResponse } from '../interfaces/location-response.interface';
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  //get all locations
  getAllLocations(page: number = 1 ) {
    return this.http.get<LocationResponse>(`${this.apiUrl}/locations?page=${page}`);
  } 
//get location by id
  getLocationById(id: number) {
    return this.http.get<Location>(`${this.apiUrl}/locations/${id}`);
  }
}
