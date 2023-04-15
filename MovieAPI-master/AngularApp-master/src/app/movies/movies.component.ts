import { Component, OnInit } from '@angular/core';
import { IMovies } from './movies';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any;
  pageNumber: number = 1;
  // movies: IMovies[] = [
  //   {
  //     filmID: 1,
  //     Naziv: 'Top Gun: Maverick',
  //     Godina: '2022',
  //     Zanr: 'Akacija',
  //     Trajanje: 2,
  //     Rating: 5,
  //     Opis: 'Kroz film se definitivno osjeća nostalgija za vremenima kada su snimani ovakvi filmovi, a sada je jedan takav naslov došao uz sve što nudi moderno kreiranje filmova.',
  //     Poster: 'assets/slikafilma.jpg',
  //     Prikaz: true,
  //   },
  //   {
  //     filmID: 2,
  //     Naziv: 'Top Gun: Maverick',
  //     Godina: '2022',
  //     Zanr: 'Akacija',
  //     Trajanje: 2,
  //     Rating: 5,
  //     Opis: 'Kroz film se definitivno osjeća nostalgija za vremenima kada su snimani ovakvi filmovi, a sada je jedan takav naslov došao uz sve što nudi moderno kreiranje filmova.',
  //     Poster: 'assets/slikafilma.jpg',
  //     Prikaz: true,
  //   },
  // ];

  ngOnInit(): void {
    this.fetchMovies()
  }

  // showOpis: boolean = false;

  // toggleDescriptionMovie(id: number) {
  //   for (var i = 0; i < this.movies.length; i++) {
  //     if (this.movies[i].filmID == id)
  //       this.movies[i].Prikaz = !this.movies[i].Prikaz;
  //   }
  // }

  constructor(private dataService: DataService) { }

  fetchMovies() {
    this.dataService.getMovies(this.pageNumber).subscribe((response: any) => {
      this.movies = response.results;
      console.log(this.movies);
    })
  }
  openMoviePage(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.fetchMovies();
  }

}
