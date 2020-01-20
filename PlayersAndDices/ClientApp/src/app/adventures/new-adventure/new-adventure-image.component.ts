import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'new-adventure-image',
    template: `
      <div (mouseenter)="showDelete = true;" (mouseleave)="showDelete = false;">
        <img *ngIf="cell.image" [src]="cell.image" style="width: 100%;" />
        <mat-icon *ngIf="showDelete" class="image-delete-button" (click)="deleteImage()">delete</mat-icon>
      </div>`,
    styles: [`.image-delete-button { position: absolute; top: 12px; right: 24px; color: white; } .image-delete-button:hover { cursor: pointer; }`]
})
export class NewAdventureImageComponent {
    @Input() cell: any;
    @Output() onImageDelete = new EventEmitter<any>()

    showDelete: boolean;

    constructor() {

    }

    ngOnInit() {
        
    }

    deleteImage() {
        this.onImageDelete.emit(this.cell);
    }
}
