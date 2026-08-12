import { Component, OnInit, signal } from '@angular/core';
import { TriviaService } from '../../core/services/trivia-question.service';
import { TriviaQuestion } from '../../models/trivia-question.model';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-question',
  standalone: true,
  templateUrl: './question.component.html',
  imports: [LoadingSpinnerComponent],
})
export class QuestionComponent implements OnInit {
  questions = signal<TriviaQuestion[]>([]);
  loading = signal(true);

  constructor(private triviaService: TriviaService) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.loading.set(true);

    this.triviaService.getQuestions(3, 'video-games').subscribe({
      next: (data) => {
        this.questions.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      },
    });
  }
}
