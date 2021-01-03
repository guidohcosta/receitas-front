import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { JsonApiModule } from 'angular2-jsonapi';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
