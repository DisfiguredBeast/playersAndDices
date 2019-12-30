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
    this.board = this.createNewBoard();
  }


  ngOnInit() {
  }


  onCellClick(rowIndex : number, columnIndex : number){
    this.board[rowIndex][columnIndex] = !this.board[rowIndex][columnIndex];
  }

  onHeigthChange(heigth : number){
    this.tableHeigth = heigth;
    this.board = this.createNewBoard();
  }

  onWidthChange(width : number){
    this.tableWidth = width;
    this.board = this.createNewBoard();
  }

  createNewBoard(){
   let tmpBoard = [];
    for (let x = 0; x < this.tableWidth; x ++){
      tmpBoard[x] = [];
        for (let y = 0; y < this.tableHeigth; y++){
          tmpBoard[x][y] = false;
        }
    }
    return tmpBoard;
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
       await setTimeout(resolve,10);  

       let newBoard = this.createNewBoard();
      
       this.count++;    
        for (let x = 0; x < this.tableWidth; x++){
          for (let y = 0; y < this.tableHeigth; y++){           
            newBoard[x][y] = this.Decide(x,y);
          }       
      }
      this.board = newBoard;
    });
  }

  Decide(x : number, y : number) : boolean{

    let livingNeighbour = 0;

    if (x > 0 && y > 0 && this.board[x-1][y-1]) 
      livingNeighbour++;    
    if (y > 0 && this.board[x][y-1]) 
      livingNeighbour++;
    if (x < this.tableWidth -1 && y > 0 && this.board[x+1][y-1]) 
      livingNeighbour++;

    if (x > 0 && this.board[x-1][y]) 
      livingNeighbour++;
    if (x < this.tableWidth -1 && this.board[x+1][y]) 
      livingNeighbour++;

    if (x > 0 && y < this.tableHeigth -1 && this.board[x-1][y+1]) 
      livingNeighbour++;
    if (y < this.tableHeigth -1 && this.board[x][y+1]) 
      livingNeighbour++;
    if (x < this.tableHeigth -1 && y < this.tableHeigth -1 && this.board[x+1][y+1]) 
      livingNeighbour++;
    
    //Eine tote Zelle mit genau drei lebenden Nachbarn wird in der Folgegeneration neu geboren.
    if (!this.board[x][y] && livingNeighbour === 3)
      return true;

    //Lebende Zellen mit weniger als zwei lebenden Nachbarn sterben in der Folgegeneration an Einsamkeit.
    if (this.board[x][y] && livingNeighbour < 2)
      return false;
      
    //Eine lebende Zelle mit zwei oder drei lebenden Nachbarn bleibt in der Folgegeneration am Leben.
    if (this.board[x][y] && livingNeighbour >= 2 && livingNeighbour <=3)
      return true;

    //Lebende Zellen mit mehr als drei lebenden Nachbarn sterben in der Folgegeneration an Überbevölkerung.
    if (this.board[x][y] && livingNeighbour > 3)
      return false;
   
      return false;
  }

  resetBoard(){
    this.board = this.createNewBoard();
    this.count = 0;
  }
}


