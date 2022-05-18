import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/MovieModel';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  movies?: MovieModel[]
  
  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
    this.service.getTopRatedMoviesServices().subscribe(
      (data: any) => {
        this.movies = data.results
        console.log(data.results);
        
      }
    )
  }

}
