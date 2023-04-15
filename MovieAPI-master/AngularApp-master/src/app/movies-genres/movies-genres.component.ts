import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies-genres',
  templateUrl: './movies-genres.component.html',
  styleUrls: ['./movies-genres.component.css']
})
export class MoviesGenresComponent implements OnInit {
  genres: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetcGenres()
  }
  fetcGenres() {
    this.dataService.getGenres().subscribe((response: any) => {
      this.genres = response.results;

    })
  }
}
