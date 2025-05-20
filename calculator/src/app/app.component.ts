import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculateComponent } from './components/calculate/calculate.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculateComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';


}
