import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service"

const STORAGE_KEY = 'chars';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public saveCharacters(chars: object[]) {
    this.storage.set(STORAGE_KEY, chars);
  }

  public getCharacters():object[] {
    return this.storage.get(STORAGE_KEY);
  }
}
