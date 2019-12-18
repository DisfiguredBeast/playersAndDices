import { Component } from '@angular/core';

@Component({
  selector: 'new-adventure-component',
  templateUrl: './new-adventure.component.html',
  styleUrls: ['./new-adventure.component.css']
})
export class NewAdventureComponent {

    rows: any[] = [];
    activeCell: any;

    constructor() {

    }

    ngOnInit() {
        this.rows.push({ cells: [{ fontSize: "32px", placeholder: "Title...", multiline: false, underline: true }] });
        this.rows.push({ cells: [{ fontSize: "24px", placeholder: "Subtitle...", multiline: false }] });
        this.rows.push({ cells: [{ fontSize: "14px", placeholder: "Text...", multiline: true }] });
        this.rows.push({ cells: [{ fontSize: "14px", placeholder: "Text...", multiline: true }, { fontSize: "14px", placeholder: "Text...", multiline: true }] });
    }
}
