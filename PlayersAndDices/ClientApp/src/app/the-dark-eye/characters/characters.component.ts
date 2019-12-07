import { Component } from '@angular/core';
import { MatList } from "@angular/material/list"
import { TheDarkEyeService } from "../services/the-dark-eye.service"

@Component({
  selector: 'the-dark-eye-characters-component',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class TheDarkEyeCharactersComponent {

    characters: any[];

    constructor(private service: TheDarkEyeService) { }

    ngOnInit() {
        this.characters = this.service.getHeroes();
    }
}
