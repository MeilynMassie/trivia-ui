import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TriviaQuestion } from '../../models/trivia-question.model';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  private baseUrl = 'http://localhost:8080/api/v1/trivia-question';
  // http://localhost:8080/api/v1/trivia-question?limit=1&category=movies

  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    console.log(`Fetching categories`);
    return this.http.get<string[]>(this.baseUrl + '/category');
  }

  getQuestions(limit: number, category: string): Observable<TriviaQuestion[]> {
    const params = new HttpParams().set('limit', limit).set('category', category);
    console.log(`Fetching questions with limit=${limit} and category=${category}`);
    console.log(`Request URL: ${this.baseUrl}?${params.toString()}`);
    return this.http.get<TriviaQuestion[]>(`${this.baseUrl}`, { params });
  }
}
