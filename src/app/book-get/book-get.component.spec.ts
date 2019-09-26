import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGetComponent } from './book-get.component';

describe('BookGetComponent', () => {
  let component: BookGetComponent;
  let fixture: ComponentFixture<BookGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
