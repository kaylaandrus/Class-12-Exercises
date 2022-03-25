import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title: string = 'Hey how are you?';
  content: string = 'Good how are you?';
  isTechRelated: boolean = true;
}
