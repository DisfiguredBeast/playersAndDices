import { Component, Input, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'new-adventure-text',

    template: `
      <div *ngIf="showOptions" class="btn-group adventure-text-options" role="group">
        <button class="btn btn-primary" [ngClass]="{'active': cell.bold}" (click)="cell.bold = !cell.bold" role="button" aria-pressed="true">B</button>
        <button class="btn btn-primary" [ngClass]="{'active': cell.italic}" (click)="cell.italic = !cell.italic" role="button" aria-pressed="true">I</button>

        <div class="btn-group" role="group">
          <button id="btnFontSize" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{cell.fontSize}}
          </button>
          <div class="dropdown-menu" aria-labelledby="btnFontSize">
            <button class="dropdown-item" *ngFor="let fontSize of fontSizes" [ngClass]="{'active': cell.fontSize === fontSize}" (click)="cell.fontSize = fontSize">{{fontSize}}</button>
          </div>
        </div>
      </div>

      <textarea [(ngModel)]="cell.value" matInput
                class="adventure-input adventure-variable-input"
                placeholder="{{cell.placeholder}}"
                (keyup)="resizeTextArea($event)"
                [style.fontSize]="cell.fontSize"
                [style.fontStyle]="(cell.italic ? 'italic' : 'unset')"
                [style.fontWeight]="(cell.bold ? 'bold' : 'normal')"></textarea>`,

    styles: [`.adventure-input { border: none; display: block; overflow: hidden; width: 100%; }
            .adventure-variable-input { font-size: var(--font-size); }
            .adventure-text-options { border: 1px solid silver; line-height: 16px; padding: 2px; position: absolute; bottom: 100%; }
            .hover-option: { cursor: pointer; }`]
})
export class NewAdventureTextComponent implements AfterViewInit {
    @Input() cell: any;

    fontSizes: any[] = ["8px", "10px", "12px", "14px", "16px", "18px", "20px", "24px", "28px", "32px"];

    showOptions: boolean;

    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        
    }

    ngAfterViewInit() {
        let textArea = this.elementRef.nativeElement.lastChild;
        let fakeEvent = { target: textArea };
        this.resizeTextArea(fakeEvent);
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        this.showOptions = this.elementRef.nativeElement.contains(event.target);
    }

    resizeTextArea(event) {
        let textArea = event.target;
        textArea.style.height = "0px";
        textArea.style.height = textArea.scrollHeight + "px";
    }
}
