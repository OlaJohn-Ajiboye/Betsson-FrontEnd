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
  genres: any = [];
  ngOnInit() {
    this.getMovies();
    this.moviesList = this.movies;
    this.genres = [
      'all',
      'action',
      'adventure',
      'biography',
      'comedy',
      'crime',
      'drama',
      'history',
      'mystery',
      'scifi',
      'sport',
      'thriller'
    ];
  }
  getMovies(): void {
    this.movies = this.movieService.getMovies();
  }
  search(query) {
    this.moviesList = this.movies.filter(movie => {
      return movie.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1;
    });
  }
  selectGenre(genre) {
    // let genreMovies = [];
    if (genre === 'all') {
      this.moviesList = this.movies;
    } else {
      this.moviesList = this.movies.filter(movie => {
        const genreMovies = movie.genres.filter(g => {
          return g === genre;
        });
        return genreMovies && genreMovies.length > 0;
      });
    }
    console.log(this.moviesList.length);
  }
}
