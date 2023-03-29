import { Component } from '@angular/core';
import { QuestionService, IQuestion, IOption } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  public questionList : IQuestion[] = [];
  public currentQuestion: number = 0;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() : void {
    this.questionList = this.getAllQuestions();
  }

  getAllQuestions() : IQuestion[] {
    return this.questionService.getQuestions(4);
  }

  answer(questionNumber: number, opt : IOption) {
    if (opt.correct) {
      ++this.currentQuestion;
    }
  }
}
