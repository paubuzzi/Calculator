import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.css'
})
export class CalculateComponent {
  number1: number = 0;
  number2: number = 0;
  operator: string[] = ['+', '-', '*', '/'];
  selectedOperator: string = '+';
  result: number = 0;
  errorMessage: string = '';

  calculate(){
    switch(this.selectedOperator){
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        if(this.number2 === 0){
          this.errorMessage = 'no se puede dividir por 0';
        }
        break;

    }
  }

}
