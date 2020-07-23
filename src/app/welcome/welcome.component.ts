import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.model';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  quizzes: Quiz[];

  constructor(private questionsService: QuestionsService) {
    this.questionsService.getQuizzes().subscribe(results => {
      this.quizzes = results;
    });
  }

  ngOnInit(): void {
  }

}
