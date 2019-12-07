import { Component } from '@angular/core';
import { TheDarkEyeService } from "../services/the-dark-eye.service"

@Component({
  selector: 'the-dark-eye-character-creation-component',
  templateUrl: './character-creation.component.html'
})
export class TheDarkEyeCharacterCreationComponent {

    characters: any[];

    constructor(private service: TheDarkEyeService) { }

    ngOnInit() {
    }
}
