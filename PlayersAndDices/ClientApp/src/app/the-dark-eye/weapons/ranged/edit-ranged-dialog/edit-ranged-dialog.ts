import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RangedWeapon } from '../ranged.component';
import { FormsModule } from '@angular/forms';

export interface Bow{
  name : string,
  description : string
}

@Component({
  selector: 'app-edit-ranged-dialog',
  templateUrl: './edit-ranged-dialog.html',
  styleUrls: ['./edit-ranged-dialog.css']
})


export class EditRangedDialog {

  ranged : Bow;

  enteredData : any;
  constructor (public dialogRef: MatDialogRef<EditRangedDialog>,
        @Inject(MAT_DIALOG_DATA) public data: RangedWeapon) { 
          this.ranged = {name:"Zauberbogen", description:"eine beschreibung halt"};
  }

  ngOnInit() {
  }

  onClose() : void {
    this.enteredData = {name: "MOAB", range: 42, damage: 1337};
    this.dialogRef.close(); 
  }

}
