import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  uri = 'http://localhost:8000/books';

  constructor(private http: HttpClient) { }

  addBook(name, price, quantity) {
    const obj = {
      name: name,
      price: price,
      quantity: quantity
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBooks() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editBook(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }

    updateBook(id,name, price, quantity) {

      const obj = {
          
          name: name,
          price: price,
          quantity: quantity
        };
      this
        .http
        .put(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deleteBook(id) {
      return this
                .http
                .delete(`${this.uri}/${id}`);
    }
}
