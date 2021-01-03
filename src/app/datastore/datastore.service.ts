import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './models/recipes.model';

const config: DatastoreConfig = {
  baseUrl: 'http://localhost:3000',
  models: {
    recipes: Recipe
  }
}

@Injectable({ providedIn: 'root' })
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: HttpClient) {
        super(http);
    }

}
