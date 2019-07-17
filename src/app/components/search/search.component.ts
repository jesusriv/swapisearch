import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  @Input() characters: any;
  @Input() currentCharacters: any;
  @Output() characterEvent = new EventEmitter<any>();
  @Output() resetEvent = new EventEmitter<any>();
  char: any = [];
  myForm: FormGroup;

  query: string;

  constructor(private _fb: FormBuilder ) { }
  
  ngOnInit() {
    this.myForm = this._fb.group({
      result: '',
      filter: '' 
    });

    this.onChanges();
  }

  onChanges():void {
    this.myForm.get('result').valueChanges.subscribe(val => {
      if(val) {
        // let filter = this.myForm.get('filter').value.toLowerCase();
        // if(filter) {
          this.char = this.characters.map(c => {
            if(c.name.toLowerCase().includes(val.toLowerCase())) {
              return c;
            }
          });
        // }
      } else {
        this.reset();
      }
      this.currentCharacters = this.char.filter(c => c != undefined);
      this.sendCharacters();
    });
  }

  sendCharacters() {
    if(this.currentCharacters.length <= 0) {
      this.characterEvent.emit(false);
    }
    this.characterEvent.emit(this.currentCharacters);
  }

  reset() {
    this.resetEvent.emit(true);
  }
}
