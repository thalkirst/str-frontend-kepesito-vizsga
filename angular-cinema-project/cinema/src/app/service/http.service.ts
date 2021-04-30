import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/thalkirst/movies';

  movies: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor(private http: HttpClient) { }

  getMovieList(): any {
    this.movies.next([]);
    this.http.get<Movie[]>(this.BASE_URL).subscribe(
      list => this.movies.next(list)
    );
  }

  deleteMovie(id): any {
    this.http.delete<Movie>(
      `${this.BASE_URL}/${id}`
    ).subscribe(
      this.getMovieList()
    );
  }

}
