import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.getMovie(id);
    });
  }
  getMovie(id) {
    this.movie = this.movieService.getMovie(id);
    console.log(this.movie);
  }
}
