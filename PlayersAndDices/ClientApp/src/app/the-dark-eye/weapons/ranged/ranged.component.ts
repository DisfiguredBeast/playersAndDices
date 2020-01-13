import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditRangedDialog } from './edit-ranged-dialog/edit-ranged-dialog';
import { MatTableDataSource, MatTable } from '@angular/material';
import { of, Observable } from 'rxjs';
import { RangedWeapon, RangedType } from './RangedWeapon';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-ranged',
  templateUrl: './ranged.component.html',
  styleUrls: ['./ranged.component.css']
})
export class RangedComponent implements OnInit, AfterViewInit {
   
  @ViewChild('rangedTable', {static: false}) rangedTable : MatTable<RangedWeapon>;
  displayedColumns: string[] = ['name', 'typ', 'range', 'damage', 'description', 'edit', 'delete'];
  dataSource : Observable<RangedWeapon[]>;
  rawData : RangedWeapon[];
  
  constructor(public dialog: MatDialog) { 
    
    this.rawData = ([
      {id: 1, name: 'bow of shorty', typ: RangedType.Shortbow, description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", range: 20, damage: 99},
      {id: 2, name: 'long john', typ: RangedType.Longbow,description: "a long bow wit a lot of range", range: 30, damage: 15},
      {id: 3, name: 'strange one', typ: RangedType.Crossbow ,description: "a strong bow" ,range: 25, damage: 17}
    ]);

    this.dataSource = of (this.rawData);
  }
  
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.refreshTable();
  }
 
  openDialog(weapon : RangedWeapon) : void {

    if (!weapon)
      weapon = null;

    const dialogRef = this.dialog.open(EditRangedDialog, {
      width: '55%', data: weapon
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (!result)
        return;

      var returnValue = result as RangedWeapon;

      var index = this.rawData.findIndex(e => e.id == returnValue.id);

      if (index == -1 && this.rawData.length > 0){
        var sorted = this.rawData.sort((a, b) => b.id - a.id);
        returnValue.id = sorted[0].id + 1; 
      }
      else{
        this.rawData.splice(index, 1);
      }    
      this.rawData.push(returnValue)
      this.refreshTable();       
    });

  }

  onEdit(element : RangedWeapon) : void{
    this.openDialog(element)
    
  }

  onDelete(element : any) : void {
    var index = this.rawData.findIndex(e => e.id === element.id);
    if (index == -1)
      return;

    this.rawData.splice(index, 1);
    this.refreshTable();
  }

  getDescription(element : RangedWeapon) : string {
    return element.description.length > 50 ? 
      element.description.substring(0,50) + "..." : element.description; 
  }

  refreshTable() : void {
    this.rawData.sort((a, b) =>  {
      if (b.name < a.name) return 1;
      if (b.name > a.name) return -1;
      return 0;
    });

    this.rangedTable.renderRows();
  }

  
}
