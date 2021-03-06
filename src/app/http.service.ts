import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getApi(url) {
    return this._http.get(url);
  }

  apiCall() {
    return this._http.get('/characters')
  }
}