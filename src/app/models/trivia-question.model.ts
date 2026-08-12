import { TriviaChoice } from './trivia-choice.model';

export interface TriviaQuestion {
  id: number;
  category: string;
  question: string;
  choices: TriviaChoice[];
}
