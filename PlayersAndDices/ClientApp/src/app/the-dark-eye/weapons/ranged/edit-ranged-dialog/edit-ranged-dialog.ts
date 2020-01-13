import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RangedWeapon } from '../ranged.component';
import { Ranged, RangedType } from './ranged';

@Component({
  selector: 'app-edit-ranged-dialog',
  templateUrl: './edit-ranged-dialog.html',
  styleUrls: ['./edit-ranged-dialog.css']
})


export class EditRangedDialog {

  ranged = new Ranged("magic bow", RangedType.Longbow,"fires fire arrows");
  rangedTypes = [RangedType.Longbow, RangedType.Shortbow, RangedType.Crossbow, RangedType.ThrowingKnife];
  
  constructor (public dialogRef: MatDialogRef<EditRangedDialog>,
        @Inject(MAT_DIALOG_DATA) public data: RangedWeapon) { 
         
  }

  ngOnInit() {
  }

  onSubmit(value : any) : void {
    this.dialogRef.close(this.ranged);
  }

  onClose() : void {
    this.dialogRef.close(); 
  }
}
