import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImgService } from '../../img.service';
import { MatCardModule } from '@angular/material/card'; 
import { MatListModule } from '@angular/material/list'; 

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input() char: any;
  homeworld: any;
  image: any;
  species: any;

  constructor(private _imgService: ImgService) {}

  ngOnInit() {
    this.images();
    this.getSpecies();
    this.getHomeworld();
  }

  async images() {
    let data = <any>await this._imgService.getImage()
      .toPromise()
        .then((c: any []) => c.filter(x => x['name'] == this.char.name))
        .catch(e => e);
    this.image = data.map(c => c['img'])
  }

  async getHomeworld() {
    this.homeworld = <any>await this._imgService.getApi(this.char.homeworld)
      .toPromise()
        .then(hW => hW['name'])
        .catch(e => e);
  }

  async getSpecies() {
    this.species = <any>await this._imgService.getApi(this.char.species[0])
      .toPromise()
        .then(sP => sP['name'])
        .catch(e => e);
  }
}
