import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selectedCategory = signal('video-games');
  selectedAnswers = signal<Record<number, number>>({});
  currentQuestionIndex = signal(0);

  constructor(
    private triviaService: TriviaService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category') ?? 'video-games';
      this.selectedCategory.set(category);
      this.currentQuestionIndex.set(0);
      this.loadQuestions(category);
    });
  }

  loadQuestions(category: string) {
    this.loading.set(true);

    this.triviaService.getQuestions(3, category).subscribe({
      next: (data) => {
        this.questions.set(data);
        this.selectedAnswers.set({});
        this.currentQuestionIndex.set(0);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      },
    });
  }

  selectAnswer(questionId: number, choiceId: number): void {
    this.selectedAnswers.update((current) => ({
      ...current,
      [questionId]: choiceId,
    }));

    setTimeout(() => {
      this.goToNextQuestion();
    }, 350);
  }

  isSelected(questionId: number, choiceId: number): boolean {
    return this.selectedAnswers()[questionId] === choiceId;
  }

  get currentQuestion(): TriviaQuestion | undefined {
    return this.questions()[this.currentQuestionIndex()];
  }

  goToNextQuestion(): void {
    const nextIndex = this.currentQuestionIndex() + 1;

    if (nextIndex >= this.questions().length) {
      return;
    }

    this.currentQuestionIndex.set(nextIndex);
  }

  get progressText(): string {
    const total = this.questions().length;
    return total > 0 ? `${this.currentQuestionIndex() + 1}/${total}` : '0/0';
  }
}
