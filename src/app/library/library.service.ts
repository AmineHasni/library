// library.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Book {
    id?: number;
    name: string;
    authorName: string;
  }
  
  
export interface Shelf {
    id?: number;
    order: string;
    books: Book[];
  }
  
  
  
export interface Library {
    id?: number;
    libraryName: string;
    libraryAddress: string;
    shelves: Shelf[];
  }

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private apiUrl = 'http://localhost:9000/libraries';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addLibrary(library: Library): Observable<Library> {
    return this.http.post<Library>(this.apiUrl, library, this.httpOptions).pipe(
      catchError(this.handleError<Library>('addLibrary'))
    );
  }

  getLibrary(id: number): Observable<Library> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Library>(url).pipe(
      catchError(this.handleError<Library>(`getLibrary id=${id}`))
    );
  }

  updateLibrary(library: Library): Observable<any> {
    return this.http.put(this.apiUrl, library, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateLibrary'))
    );
  }

  deleteLibrary(id: number): Observable<Library> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Library>(url, this.httpOptions).pipe(
      catchError(this.handleError<Library>('deleteLibrary'))
    );
  }

  getLibraries(): Observable<Library[]> {
    return this.http.get<Library[]>(this.apiUrl).pipe(
      catchError(this.handleError<Library[]>('getLibraries', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
