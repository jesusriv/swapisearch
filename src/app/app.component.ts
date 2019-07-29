import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

import { map, startWith } from 'rxjs/operators';

// CAHCE_KEY
const CAHCE_KEY = 'httpCharacterCache'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalCharacters = 87;
  characters: any = []; 
  charactersPerPage = 6; 
  pageNumbers: any = [];
  currentPage = 1;
  apiLink: any = "https://swapi.co/api/people";

  // Get current characters
  indexOfLastCharacter = this.currentPage * this.charactersPerPage;
  indexOfFirstCharacter = this.indexOfLastCharacter - this.charactersPerPage;
  currentCharacters: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getAllCharacters();
  }

  async getAllCharacters() {
    let data = <any>await this._httpService.getApi(this.apiLink)
      .toPromise()
        .then(d => d);
    data['results'].forEach(c => this.characters.push(c))

    this.currentCharacters = this.characters.slice(this.indexOfFirstCharacter, this.indexOfLastCharacter);

    let link = data['next'];
    while(link != null) {
      <any>await this._httpService.getApi(link)
        .toPromise()
          .then(d => {
            link = d['next'];
            d['results'].forEach(c => this.characters.push(c));
          });
    }
  }

  recieveCharacter(e) {
    this.currentCharacters = e;
    this.totalCharacters = this.currentCharacters.length;
  }

  reset() {
    this.currentCharacters = [];
    this.characters = [];
    this.getAllCharacters();
  }

  recievePage(e) {
    this.currentPage = e;
    this.indexOfLastCharacter = this.currentPage * this.charactersPerPage;
    this.indexOfFirstCharacter = this.indexOfLastCharacter - this.charactersPerPage;
    this.currentCharacters = this.characters.slice(this.indexOfFirstCharacter, this.indexOfLastCharacter);
  }


   // async getAllCharacters() {
  //   this.characters = <any>await this._httpService.apiCall()
  //     .toPromise()
  //       .then(d => d)
  //       .catch(e => console.log());

  //   this.currentCharacters = this.characters;
  // }

}