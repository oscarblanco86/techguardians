import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // counter = {};
  // public counter: { min: number, sec: number }

  // startTimer() {
  //   this.counter = { min: 30, sec: 0 } // choose whatever you want
  //   let intervalId = setInterval(() => {
  //     if (this.counter.sec - 1 == -1) {
  //       this.counter.min -= 1;
  //       this.counter.sec = 59
  //     } 
  //     else this.counter.sec -= 1
  //     if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId)
  //   }, 1000)
  //}
}
