import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private APP_ID= environment.EDAMAM_APP_ID;
  private APP_KEY = environment.EDAMAM_APP_KEY;
  private CLIENT_ID = environment.VENUE_CLIENT_ID;
  private CLIENT_KEY = environment.VENUE_CLIENT_SECRET;
  private recipeUrl = `https://api.edamam.com/search?app_id=${this.APP_ID}&app_key=${this.APP_KEY}`;
  private venueUrl = `https://api.foursquare.com/v2/venues/search?client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_KEY}&v=20180323`;
  constructor(private httpClient: HttpClient) { }

  public getRecipeDetails(item: string) {
    const apiUrl = this.recipeUrl + `&q=${item}`;
    return this.httpClient.get(apiUrl);
  }

  public getVenueDetails(item: string, place:string) {
    const apiUrl = this.venueUrl + `&near=${place}&query=${item}`;
    return this.httpClient.get(apiUrl);
  }
}
