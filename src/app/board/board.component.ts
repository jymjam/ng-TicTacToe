import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[]
  xIsNext: boolean
  winner: string
  btnIsDisabled = false

  ngOnInit(): void { //app lifecycle initializer
    this.newGame()//initializing a new game
  }

  //game parameters
  newGame(){
    this.squares = Array(9).fill(null)
    this.winner = null
    this.xIsNext = true
  }
  //if xisNext = true; next player = 'x otherwuise o
  get Player(){
    return this.xIsNext ? 'X' : 'O'
  }
  //reverse logic of Player
  get currentPlayer(){
    return this.xIsNext ? 'O' : 'X'
  }

  //eventhandler for user click on the square, idx = index of the square
  //if the user clicks on a non-clicked square, this id is gotten and the turn changes
  userMove(idx: number){
    if (!this.squares[idx]){
      this.squares.splice(idx, 1, this.Player)
      this.xIsNext = !this.xIsNext
    }
    this.winner = this.calculateWinner()
  }
  //actual game logic, all winning permutations
  calculateWinner(){
    const lines= [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for (let i = 0; i< lines.length; i++){
      const [a,b,c] = lines[i];
      if(
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ){
        this.winner = this.currentPlayer
        return this.squares[a], this.winner;
      }
    }
    return null
  }

  autoRestartGame(){
    if(this.winner !== null){
      this.btnIsDisabled = true
    }
  }



}
