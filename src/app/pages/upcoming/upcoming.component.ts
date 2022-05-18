import { Component, Input, OnInit } from '@angular/core';
import { FightClub, MovieModel } from 'src/app/models/MovieModel';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  @Input() movie?: MovieModel = FightClub
  movies?: MovieModel[]
  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.getUpcomingMovies()
  }

  getUpcomingMovies(){
    return this.service.getUpcomingService().subscribe(
      (data : any) => {
        console.log(data.results);
        this.movies = data.results
      }
    )
  }

}
