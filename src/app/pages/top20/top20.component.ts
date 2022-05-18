import { Component, Input, OnInit } from '@angular/core';
import { FightClub, MovieModel } from 'src/app/models/MovieModel';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-top20',
  templateUrl: './top20.component.html',
  styleUrls: ['./top20.component.css']
})
export class Top20Component implements OnInit {
  @Input() movie?: MovieModel = FightClub
  movies?: MovieModel[]

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.getMoviesMostPopular()
  }

  getMovie(){  // 1 filme
    this.service.getMovieService().subscribe(
      (data: MovieModel) => {
        console.log(data);
        this.movie = data
      }
    )
  }

  getMoviesMostPopular(){
    return this.service.getMoviesMostPopularService().subscribe(
      (data : any) => {
        console.log(data);
        this.movies = data.results
        
      }
    )
  }

}
