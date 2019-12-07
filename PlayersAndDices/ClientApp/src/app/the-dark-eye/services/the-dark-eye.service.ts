import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheDarkEyeService {

    getHeroes(): any[] {
        return [
            { name: "John", creationDate: new Date() },
            { name: "Jane", creationDate: new Date() },
            { name: "Jimmy", creationDate: new Date() },
        ]
    }
  constructor() { }
}
