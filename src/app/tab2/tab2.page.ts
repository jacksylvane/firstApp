import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  categories = [
    {
      name: 'Diet Recommendation',
      image: 'diet-recommendation.png'
    },
    {
      name: 'Kegel Exercises',
      image: 'kegel-exercises.png'
    },
    {
      name: 'Meditation',
      image: 'meditation.png'
    },
    {
      name: 'Yoga',
      image: 'yoga.png'
    },
    {
      name: 'Diet Recommendation',
      image: ''
    },
    {
      name: 'Kegel Exercises',
      image: ''
    },
    {
      name: 'Meditation',
      image: ''
    },
    {
      name: 'Yoga',
      image: ''
    },
  ];
  constructor() { }

}
