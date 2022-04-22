import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Book} from "./model/books.model";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


export const books: Book[] = [
    { id: '1', name: 'Harry Potter' , price: 10, quantity: 1, category: "Fantasia e Romance", img:"img1"},
    { id: '2', name: 'Crepúsculo' , price: 10, quantity: 1, category: "Fantasia e Romance", img:"img2"},
    { id: '3', name: 'Jogos Vorazes' , price: 10, quantity: 1, category: "Fantasia e Romance", img:"img3"},

  ];

@Injectable()


export class BooksService {

  private url = 'https://localhost:44382/api/GrapeMouthBookstore';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private http: HttpClient){}


    // getBooks(){
    //     return books;
    // }

    getBooks() {
      return this.http.get(this.url)

  
    }

}
