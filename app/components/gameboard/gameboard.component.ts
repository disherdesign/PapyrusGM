import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
	fullImagePath1: string;
	fullImagePath2: string;
  constructor() { 
  this.fullImagePath1 = "/assets/images/BW.png"
  this.fullImagePath2 = "/assets/images/DND.png"
  }

  ngOnInit() {
  }

}
