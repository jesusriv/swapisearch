import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ImgService {
  apiUrl = "assets/api.json";
  constructor(private _http: HttpClient) {}

  getImage() {
    return this._http.get(this.apiUrl);
  }

  getApi(url) {
    return this._http.get(url);
  }
}
