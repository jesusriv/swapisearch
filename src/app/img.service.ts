import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private _http: HttpClient) { }

  getImage() {
    return this._http.get('https://jesusriv.github.io/sw_character_imgs/api.json');
  }

   getApi(url) {
    return this._http.get(url);
  }
}
