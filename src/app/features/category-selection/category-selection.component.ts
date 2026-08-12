import { Component, OnInit, signal } from '@angular/core';
import { TriviaService } from '../../core/services/trivia.service';

@Component({
  selector: 'category-selection',
  standalone: true,
  templateUrl: './category-selection.component.html',
})
export class CategorySelectionComponent implements OnInit {
  categories = signal<string[]>([]);
  loading = signal(true);

  constructor(private triviaService: TriviaService) {}

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
}
