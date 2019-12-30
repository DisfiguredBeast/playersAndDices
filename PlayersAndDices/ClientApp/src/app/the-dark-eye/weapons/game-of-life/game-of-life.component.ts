import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.css']
})
export class GameOfLifeComponent implements OnInit {


  selectHeigth = Array;
  selectWidth = Array;

  tableHeigth: number = 16;
  tableWidth : number = 16;

  board: boolean[][];

  getCurrentStyles(rowIndex: number, columnIndex: number){     
    return {'background': (this.board[rowIndex][columnIndex]) ? 'green' : 'white' }
  };


  constructor() {
    this.createNewBoard();
  }


  ngOnInit() {
  }


  onCellClick(rowIndex : number, columnIndex : number){
    this.board[rowIndex][columnIndex] = !this.board[rowIndex][columnIndex];
  }

  onHeigthChange(heigth : number){
    this.tableHeigth = heigth;
    this.createNewBoard();
  }

  onWidthChange(width : number){
    this.tableWidth = width;
    this.createNewBoard();
  }

  createNewBoard(){
    this.board = [];
    for (let x = 0; x < this.tableWidth; x ++){
        this.board[x] = [];
        for (let y = 0; y < this.tableHeigth; y++){
          this.board[x][y] = false;
        }
    }
  }

  running : boolean = false;

  async runStop(){
    this.running = !this.running;
    while(this.running){
      await this.runAsync(100);
    }
  }

  count : number = 0;

  runAsync(ms){
    return new Promise(async resolve => {
       await setTimeout(resolve,200);  
       this.count++;    
        for (let x = 0; x < this.tableWidth; x++){
          for (let y = 0; y < this.tableHeigth; y++){
            this.board[x][y] = !this.board[x][y];
          }       
      }
    });
  }
}


