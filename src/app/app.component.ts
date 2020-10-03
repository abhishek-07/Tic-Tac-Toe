import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage: string = ''
  isCross = true
  itemArray: string[] = new Array(9).fill('empty')


  constructor(private toastr: ToastrService) {}

  handleClick = (itemNumber: number) => {
    if(this.winMessage){
      return this.toastr.success(this.winMessage)
    } else if(this.itemArray[itemNumber] === 'empty'){ //
      this.itemArray[itemNumber] = this.isCross ? 'cross': 'circle'
      this.isCross = !this.isCross
    } else{
      return this.toastr.info("Already filled")
    }

    this.checkIsWinner()
    this.isDraw()
  }
  //checking for draw
  isDraw = () => {
    if(this.winMessage === '' &&
    !this.itemArray.includes('empty')){
      this.winMessage = 'It\'s a Draw, give it an another try!'
    }
  }

  //checking the winner of the game
  checkIsWinner = () => {
    if(this.itemArray[0] === this.itemArray[1] &&
       this.itemArray[1] === this.itemArray[2] &&
       this.itemArray[0] !== 'empty'){
         this.winMessage = `${this.itemArray[0]} Wins!`
       } else if(this.itemArray[3] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[5] &&
        this.itemArray[3] !== 'empty'){
          this.winMessage = `${this.itemArray[3]} Wins!`
        } else if(this.itemArray[6] === this.itemArray[7] &&
          this.itemArray[7] === this.itemArray[8] &&
          this.itemArray[6] !== 'empty'){
            this.winMessage = `${this.itemArray[6]} Wins!`
          } else if(this.itemArray[0] === this.itemArray[3] &&
            this.itemArray[3] === this.itemArray[6] &&
            this.itemArray[0] !== 'empty'){
              this.winMessage = `${this.itemArray[0]} Wins!`
            } else if(this.itemArray[1] === this.itemArray[4] &&
              this.itemArray[4] === this.itemArray[7] &&
              this.itemArray[1] !== 'empty'){
                this.winMessage = `${this.itemArray[1]} Wins!`
              } else if(this.itemArray[2] === this.itemArray[5] &&
                this.itemArray[5] === this.itemArray[8] &&
                this.itemArray[2] !== 'empty'){
                  this.winMessage = `${this.itemArray[2]} Wins!`
                } else if(this.itemArray[0] === this.itemArray[4] &&
                  this.itemArray[4] === this.itemArray[8] &&
                  this.itemArray[0] !== 'empty'){
                    this.winMessage = `${this.itemArray[0]} Wins!`
                  } else if(this.itemArray[2] === this.itemArray[4] &&
                    this.itemArray[4] === this.itemArray[6] &&
                    this.itemArray[2] !== 'empty'){
                      this.winMessage = `${this.itemArray[2]} Wins!`
                    }
  }

  reloadGame = () => {
    this.winMessage = ''
    this.isCross = true
    this.itemArray = new Array(9).fill('empty')
  }


}
