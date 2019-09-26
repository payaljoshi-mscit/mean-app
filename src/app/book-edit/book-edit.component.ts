import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: any = {};
  angForm: FormGroup;

 constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BookService,
    private fb: FormBuilder) {
      this.createForm();
 }

  
 
 createForm() {
  this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ],
      quantity: ['', Validators.required ]
    });
  }


ngOnInit() {
  this.route.params.subscribe(params => {
      this.bs.editBook(params['id']).subscribe(res => {
        this.book = res;
    });
  });
}

updateBook(id,name, price, quantity) {
  this.route.params.subscribe(params => {
     this.bs.updateBook(id,name, price, quantity);
     this.router.navigate(['book']);
});
}
}
