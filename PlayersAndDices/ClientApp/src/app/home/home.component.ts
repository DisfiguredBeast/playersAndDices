import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    games: any[];

    constructor() { }

    ngOnInit() {
        this.games = [
            { name: "The Dark Eye", routerLink: "the-dark-eye" },
            { name: "Dungeons & Dragons", routerLink: "dungeons-dragons" },
            { name: "Shadowrun", routerLink: "shadowrun" },
        ];
    }
}
