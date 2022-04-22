import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './model/books.model';
import { BooksService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: any;
  booksService: BooksService;

  constructor(  booksService: BooksService) {

    this.booksService = booksService;

    // this.booksService = new BooksService();
   }

  ngOnInit(): void {

    this.books = this.booksService.getBooks().subscribe((data => {
      this.books = data;
      console.log(this.books);
    }))

  }


}


