import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonLsService {
  readonly KEY = 'stored-people-data';

  constructor() { }

  public getAll(): Person[] {
    // Initialize the array to an empty array
    let people: Person[] = [];

    // Get data from local storage
    const storedData = localStorage.getItem(this.KEY);

    // If there is data, parse it using JSON.parse() and assign it to the people array
    if (storedData) {
      people = JSON.parse(storedData);
    }

    // Return all people
    return people;
  }

  public getPerson(index: number): Person {
    // Get all people
    const allPeople = this.getAll();

    // Return the person at the specified index
    return allPeople[index];
  }

  public addPerson(person: Person): void {
    // Get all people
    const allPeople = this.getAll();

    // Push the new person to the array of people
    allPeople.push(person);

    // Update local storage with the array contents serialized using JSON.stringify()
    localStorage.setItem(this.KEY, JSON.stringify(allPeople));
  }

  public deletePerson(index: number): void {
    // Get all people
    const allPeople = this.getAll();

    // Use splice() to remove the person at the specified index
    allPeople.splice(index, 1);

    // Update local storage with the new values of the people array
    localStorage.setItem(this.KEY, JSON.stringify(allPeople));
  }
}
