import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASEAPI } from 'src/environments/environment';
import { MovieModel } from '../models/MovieModel';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  
  getMovieService(): Observable<MovieModel> {
    return this.http.get<MovieModel>(`${BASEAPI.example}`)
  }

  getMoviesMostPopularService(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(`${BASEAPI.mostPopular}`)
  }

  getUpcomingService(): Observable<MovieModel[]>{
    return this.http.get<MovieModel[]>(`${BASEAPI.upcoming}`)
  }

  getTopRatedMoviesServices(): Observable<MovieModel[]>{
    return this.http.get<MovieModel[]>(`${BASEAPI.topRated}`)
  }

  getGenreMoviesServices(): Observable<any>{
    return this.http.get(`${BASEAPI.genre}`)
  }

}