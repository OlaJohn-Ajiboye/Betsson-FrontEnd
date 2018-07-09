import { Injectable } from '@angular/core';
import { movies } from './movie.mock-data';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  getMovies(): any[] {
    return movies;
  }
  getMovie(id): any {
    const movie = this.getMovies().find(item => {
      return item.id + '' === id;
    });
    return movie || null;
  }
}
