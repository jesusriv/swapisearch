import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-next-btns',
  templateUrl: './next-btns.component.html',
  styleUrls: ['./next-btns.component.css']
})
export class NextBtnsComponent implements OnInit {
  @Input() currentPage: any;
  constructor() { }

  ngOnInit() {
  }

}
