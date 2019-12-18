import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RangedWeapon } from '../ranged.component';


@Component({
  selector: 'app-edit-ranged-dialog',
  templateUrl: './edit-ranged-dialog.html',
  styleUrls: ['./edit-ranged-dialog.css']
})

export class EditRangedDialog {

  constructor (public dialogRef: MatDialogRef<EditRangedDialog>,
  @Inject(MAT_DIALOG_DATA) public data: RangedWeapon) { 

  }

  ngOnInit() {
  }

}
