import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TriviaQuestion } from '../models/TriviaQuestion';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  private baseUrl = 'http://localhost:8080/api/trivia';

  constructor(private http: HttpClient) {}

  getQuestions(limit: number, category: string): Observable<TriviaQuestion[]> {
    const params = new HttpParams()
      .set('limit', limit)
      .set('category', category);
    console.log(`Fetching questions with limit=${limit} and category=${category}`);
    console.log(`Request URL: ${this.baseUrl}/questions?${params.toString()}`);
    return this.http.get<TriviaQuestion[]>(`${this.baseUrl}/questions`, { params });
  }
}