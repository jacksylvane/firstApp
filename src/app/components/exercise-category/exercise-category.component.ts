import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise-category',
  templateUrl: './exercise-category.component.html',
  styleUrls: ['./exercise-category.component.scss'],
})
export class ExerciseCategoryComponent implements OnInit {
  @Input() category: any;
  constructor() { }

  ngOnInit() { }

}
