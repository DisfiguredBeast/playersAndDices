import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RangedWeapon, IRangedWeapon } from '../weapons/ranged/RangedWeapon';

@Injectable({
  providedIn: 'root'
})

export class TheDarkEyeService {

  constructor(private httpClient: HttpClient) { }


    getWeapon() {
      return this.httpClient.get<IRangedWeapon>("http:\\\\localhost:1234\\api\\Players\\1");
    }


    getHeroes(): any[] {
        return [
            { name: "John", creationDate: new Date() },
            { name: "Jane", creationDate: new Date() },
            { name: "Jimmy", creationDate: new Date() },
        ]
    }
}
