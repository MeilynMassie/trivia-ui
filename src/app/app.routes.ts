import { Routes } from '@angular/router';
import { QuestionComponent } from './features/question/question.component';
import { CategorySelectionComponent } from './features/category-selection/category-selection.component';

export const routes: Routes = [
  { path: '', component: CategorySelectionComponent },
  { path: 'questions/:category', component: QuestionComponent },
  { path: '**', redirectTo: '' },
];