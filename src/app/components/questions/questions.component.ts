import { Component, OnInit, signal } from '@angular/core';
import { TriviaService } from '../../services/trivia.service';
import { TriviaQuestion } from '../../models/TriviaQuestion';

@Component({
  selector: 'app-questions',
  standalone: true,
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

  // 🔥 reactive state
  questions = signal<TriviaQuestion[]>([]);
  loading = signal(true);

  constructor(private triviaService: TriviaService) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.loading.set(true);

    this.triviaService.getQuestions(20, 'video-games')
      .subscribe({
        next: (data) => {
          this.questions.set(data);
          this.loading.set(false);
        },
        error: (err) => {
          console.error(err);
          this.loading.set(false);
        }
      });
  }
}