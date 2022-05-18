import { Component, Input, OnInit, Output } from '@angular/core';
import { FightClub, MovieModel } from 'src/app/models/MovieModel';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() movies?: MovieModel[]
  @Input() movie?: MovieModel

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
  }

 
}
