import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';

export class Testdata implements InMemoryDbService {
  createDb() {
    let bookdetails: Book[] = [
      { id: 101, name: 'Angular 1', category: 'Angular  Book' },
      { id: 102, name: 'Angular 2', category: 'Angular  Book' },
      { id: 103, name: 'Angular 3', category: 'Angular 3 Book' },
      { id: 104, name: 'Angular 4', category: 'Angular 4 Book' },
      { id: 105, name: 'Angular 5', category: 'Angular 5 Book' },
      { id: 106, name: 'Angular 6', category: 'Angular 6 Book' },
    ];

    return { books: bookdetails }; //Aliasing
  }
}
