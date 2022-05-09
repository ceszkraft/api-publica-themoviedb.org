import { Component, Input, OnInit } from '@angular/core';
import { FightClub, MovieModel } from 'src/app/models/MovieModel';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() movie?: MovieModel = FightClub
  movies?: MovieModel[]

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.getMovie()
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
