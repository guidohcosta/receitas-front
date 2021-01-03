import { Component, OnInit } from '@angular/core';
import { Datastore } from '../datastore/datastore.service';
import { Recipe } from '../datastore/models/recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  constructor(
    private datastore: Datastore) { }

  ngOnInit(): void {
    this.
      datastore.
      findAll(Recipe).
      subscribe((posts) => console.log(posts.getModels()));
  }

}
