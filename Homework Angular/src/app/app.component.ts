import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  persons: Person[] = [
    {
      name: 'George',
      age: 23,
      height: 1.76,
      weight: 55,
    },
    {
      name: 'Alina',
      age: 33,
      height: 1.56,
      weight: 78,
    },
    {
      name: 'Alex',
      age: 26,
      height: 1.9,
      weight: 93,
    },
  ];

  currentPerson: Person | null = null;
  constructor() {}

  getBodyType(person: Person) {
    const bmi = person.weight / (person.height * person.height);
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight';
    } else if (bmi >= 30 && bmi <= 34.9) {
      return 'Obese';
    } else return 'Extreme Obese';
  }

  getColor(person: Person) {
    const bmi = person.weight / (person.height * person.height);
    if (bmi < 18.5) {
      return 'blue';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'green';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'yellow';
    } else if (bmi >= 30 && bmi <= 34.9) {
      return 'orange';
    } else return 'red';
  }

  onClick(person: Person) {
    this.currentPerson = person;
  }
}
