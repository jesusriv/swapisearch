import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalCharacters;
  @Input() charactersPerPage;
  @Output() pageEvent = new EventEmitter<any>();
  page: any;
  @Input() pageNumbers: any = [];
  constructor() { 
  }

  ngOnInit() {
    for(let i = 1; i <= Math.ceil(this.totalCharacters / this.charactersPerPage); i++) {
      this.pageNumbers.push(i);
    }
  }

  nextPage(n) {
    this.page = n;
    this.pageEvent.emit(this.page);
  }

}
