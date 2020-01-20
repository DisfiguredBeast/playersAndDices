import { Component, ViewChild } from '@angular/core';
import { TheDarkEyeService } from "../services/the-dark-eye.service"
import { MatSelectionList, MatSelectionListChange } from '@angular/material';

@Component({
    selector: 'the-dark-eye-character-creation-component',
    templateUrl: './character-creation.component.html',
    styleUrls: ['./character-creation.component.css']
})
export class TheDarkEyeCharacterCreationComponent {

    experienceLevels: any[];
    selectedExperienceLevel: any;

    characters: any[];

    constructor(private service: TheDarkEyeService) { }

    ngOnInit() {
        this.experienceLevels = this.service.getExperienceLevels();
    }
}
