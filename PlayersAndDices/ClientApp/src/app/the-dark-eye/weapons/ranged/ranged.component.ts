import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditRangedDialog } from './edit-ranged-dialog/edit-ranged-dialog';
import { MatTableDataSource, MatTable } from '@angular/material';
import { of, Observable } from 'rxjs';

export interface RangedWeapon {
  name: string;
  range: number;
  damage: number;
}


@Component({
  selector: 'app-ranged',
  templateUrl: './ranged.component.html',
  styleUrls: ['./ranged.component.css']
})
export class RangedComponent implements OnInit {
  
  @ViewChild('rangedTable', {static: false}) rangedTable : MatTable<RangedWeapon>;
  displayedColumns: string[] = ['name', 'range', 'damage'];
  dataSource : Observable<RangedWeapon[]>;
  rawData : RangedWeapon[];

  constructor(public dialog: MatDialog) { 

    this.rawData = ([
      {name: 'Kurzbogen', range: 20, damage: 20},
      {name: 'Langbogen', range: 30, damage: 15},
      {name: 'Kompositbogen', range: 25, damage: 17}
    ]);
    this.dataSource = of (this.rawData);
  }

  ngOnInit() {
  }

  openDialog() : void {
    const dialogRef = this.dialog.open(EditRangedDialog, {
      width: '85%', data: {name: "", range: 0, damage: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.rangedTable.renderRows();
    });
  }
}
