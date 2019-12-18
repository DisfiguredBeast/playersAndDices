import { Component } from '@angular/core';

@Component({
  selector: 'new-adventure-component',
  templateUrl: './new-adventure.component.html',
  styleUrls: ['./new-adventure.component.css']
})
export class NewAdventureComponent {

    $activeCell: any;

    adventure: any = {
        rows: []
    };

    constructor() {

    }

    ngOnInit() {
        this.adventure.rows.push({ cells: [{ fontSize: "32px", placeholder: "Title...", multiline: false, underline: true }] });
        this.adventure.rows.push({ cells: [{ fontSize: "24px", placeholder: "Subtitle...", multiline: false }] });
        this.adventure.rows.push({ cells: [{ fontSize: "14px", placeholder: "Text...", multiline: true }] });
        this.adventure.rows.push({ cells: [{ fontSize: "14px", placeholder: "Text...", multiline: true }, { fontSize: "14px", placeholder: "Text...", multiline: true }] });
    }

    resizeTextArea(event) {
        let textArea = event.target;
        textArea.style.height = "0px";
        textArea.style.height = textArea.scrollHeight + "px";
    }
}
