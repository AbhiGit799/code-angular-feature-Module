import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = '/api/books';

  bookdetailsof: Book[] = [
    { id: 101, name: 'Angular 1', category: 'Angular 1 Book' },
    { id: 102, name: 'Angular 2', category: 'Angular 2 Book' },
    { id: 103, name: 'Angular 3', category: 'Angular 3 Book' },
    { id: 104, name: 'Angular 4', category: 'Angular 4 Book' },
    { id: 105, name: 'Angular 5', category: 'Angular 5 Book' },
    { id: 106, name: 'Angular 6', category: 'Angular 6 Book' },
  ];

  constructor(private _http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this._http.get<Book[]>(this.apiUrl);
  }

  // getBooks2():Observable<Book[]>
  // {
  //     return this._http.get<Book[]>(this.apiUrl);
  // }

  // getBooks3():Observable<Book[]>
  // {
  //     return this._http.get<Book[]>(this.apiUrl);
  // }

  getBookById(bookid: number): Observable<Book> {
    return this._http.get<Book>(this.apiUrl + '?id=' + bookid);
  }

  //Ex of of operator.
  getallBooksOF(): Observable<Book[]> {
    return of(this.bookdetailsof); //Normal data ko obserable mein convert kar diya
  }


 getbookbycategory(categ:String):Observable<Book[]>
 {
   return this._http.get<Book[]>(this.apiUrl+"?category="+categ);

 }

 
 getnumbers():Observable<number>
 {
  return of(1,2,3,4,5,6,7);
 }


}










