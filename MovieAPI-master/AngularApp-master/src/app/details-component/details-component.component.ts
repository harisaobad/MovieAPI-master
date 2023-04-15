import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {
  id: any;
  genres: any;

  constructor(
    private aktivnaRuta: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.id = this.aktivnaRuta.snapshot.paramMap.get('id');
    this.fetchGenres();
  }

  fetchGenres() {
    this.dataService.getGenres().subscribe(response => { this.genres = response });
    console.log(this.genres);
  }
}
