import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[drag-and-drop]'
})
export class DragAndDropDirective {

    @Output() onFileDropped = new EventEmitter<any>();

    @HostBinding('style.background-color') private background = '#f5fcff'
    @HostBinding('style.opacity') private opacity = '1'

    //Dragover listener
    @HostListener('dragover', ['$event'])
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8'
    }

    //Dragleave listener
    @HostListener('dragleave', ['$event'])
    public onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#f5fcff'
        this.opacity = '1'
    }

    //Drop listener
    @HostListener('drop', ['$event'])
    public onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#f5fcff'
        this.opacity = '1'
        this.onFileDropped.emit(event)
        
    }
}
