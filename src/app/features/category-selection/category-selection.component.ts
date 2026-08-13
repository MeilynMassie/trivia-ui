import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TriviaService } from '../../core/services/trivia-question.service';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-category-selection',
  standalone: true,
  templateUrl: './category-selection.component.html',
  imports: [FormsModule, LoadingSpinnerComponent],
})
export class CategorySelectionComponent implements OnInit {
  categories = signal<string[]>([]);
  loading = signal(true);
  selectedCategory = '';

  constructor(
    private triviaService: TriviaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.loading.set(true);

    this.triviaService.getCategories().subscribe({
      next: (data) => {
        this.categories.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      },
    });
  }

  onSubmit(): void {
    if (!this.selectedCategory) {
      return;
    }

    this.router.navigate(['/questions', this.selectedCategory]);
  }
}
