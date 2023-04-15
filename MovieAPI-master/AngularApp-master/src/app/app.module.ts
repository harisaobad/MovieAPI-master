import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { DataService } from './data.service';
import { MoviesGenresComponent } from './movies-genres/movies-genres.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, ActorsComponent, NavComponent, DetailsComponentComponent, MoviesGenresComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
