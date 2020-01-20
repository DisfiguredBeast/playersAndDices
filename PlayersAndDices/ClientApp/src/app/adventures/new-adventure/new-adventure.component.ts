import { Component } from '@angular/core';

@Component({
  selector: 'new-adventure-component',
  templateUrl: './new-adventure.component.html',
  styleUrls: ['./new-adventure.component.css']
})
export class NewAdventureComponent {

    adventure: any = {
        rows: []
    };

    constructor() {

    }

    ngOnInit() {
        this.adventure.rows.push({ cells: [{ type: "text", fontSize: "32px", placeholder: "Title...", bold: true, italic: true }] });
        this.adventure.rows.push({ cells: [{ type: "text", fontSize: "24px", placeholder: "Subtitle...", italic: true }] });
        this.adventure.rows.push({ cells: [{ type: "text", fontSize: "14px", placeholder: "Text..." }] });
        this.adventure.rows.push({ cells: [{ type: "text", fontSize: "14px", placeholder: "Text..." }, { type: "text", fontSize: "14px", placeholder: "Text..." }] });
    }

    onFileDropped(event, cell) {
        let files = event && event.dataTransfer ? event.dataTransfer.files : [];
        if (files.length <= 0)
            return;

        let file = files[0];
        if (!file.type.startsWith("image"))
            return;

        let reader = new FileReader();
        reader.onload = function (event) {
            cell.type = "image";
            cell.image = event.target.result;
        };
        reader.readAsDataURL(file);
    }

    onImageDelete(cell) {
        delete cell.image;
        cell.type = "text";
    }
}
