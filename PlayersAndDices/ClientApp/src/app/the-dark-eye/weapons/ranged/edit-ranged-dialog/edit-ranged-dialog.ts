import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RangedWeapon, RangedType } from "../RangedWeapon";

@Component({
  selector: 'app-edit-ranged-dialog',
  templateUrl: './edit-ranged-dialog.html',
  styleUrls: ['./edit-ranged-dialog.css']
})


export class EditRangedDialog {

  ranged = new RangedWeapon();
  rangedTypes = [RangedType.Longbow, RangedType.Shortbow, RangedType.Crossbow, RangedType.ThrowingKnife];
  
  private originalData : RangedWeapon;
  private isExistingData : boolean = false;

  constructor (public dialogRef: MatDialogRef<EditRangedDialog>,
        @Inject(MAT_DIALOG_DATA) public data: RangedWeapon) {   
          if (!data)
            this.ranged = new RangedWeapon();
          else{
            this.isExistingData = true;

            this.originalData = new RangedWeapon;
            this.originalData.id = data.id;
            this.originalData.name = data.name;
            this.originalData.range = data.range;
            this.originalData.damage = data.damage;
            this.originalData.typ = data.typ;
            this.originalData.description = data.description;

            this.ranged = data;  
          }
  }

  ngOnInit() {
  }

  onSubmit(value : any) : void {
    this.dialogRef.close(this.ranged);
  }

  onClose() : void {
    if (this.isExistingData)
      this.dialogRef.close(this.originalData); 
    else
      this.dialogRef.close();
  }
}
