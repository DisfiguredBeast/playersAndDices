import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { EditRangedDialog } from './edit-ranged-dialog/edit-ranged-dialog';

export interface RangedWeapon {
  name: string;
  range: number;
  damage: number;
}

const ELEMENT_DATA: RangedWeapon[] = [
  {name: 'Kurzbogen', range: 20, damage: 20},
  {name: 'Langbogen', range: 30, damage: 15},
  {name: 'Kompositbogen', range: 25, damage: 17},

];

@Component({
  selector: 'app-ranged',
  templateUrl: './ranged.component.html',
  styleUrls: ['./ranged.component.css']
})
export class RangedComponent implements OnInit {

  displayedColumns: string[] = ['name', 'range', 'damage'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() : void {
    const dialogRef = this.dialog.open(EditRangedDialog, {
      width: '250px', data: {name: "testName"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
       console.log(`dialog returned: ${result}`);
    });
  }

}
