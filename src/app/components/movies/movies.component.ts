import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MoviesService) { }
  movies: any = [];
  moviesList: any = [];
  query: any = '';
  ngOnInit() {
    this.getMovies();
    this.moviesList = this.movies;
  }
  getMovies(): void {
    this.movies = this.movieService.getMovies();
  }
  search(query) {
    this.moviesList = this.movies.filter(movie => {
      return movie.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1;
    });
    console.log(this.moviesList);
  }
}
