import { Component, OnInit } from '@angular/core';
import 'fabric';
import { ElementRef } from '@angular/core';

declare let fabric;

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

	private canvas;
	private boundBox;
  private shape;
  private SCREEN_HEIGHT;
  private SCREEN_WIDTH;
  private here;
	

  constructor(private element: ElementRef) { }

  ngOnInit() {
    

    this.SCREEN_WIDTH = this.element.nativeElement.parentElement.clientWidth;
    this.SCREEN_HEIGHT = this.element.nativeElement.parentElement.clientHeight;

  	this.canvas = new fabric.Canvas('canvas', {
//  		width:this.SCREEN_WIDTH,
//  		height:this.SCREEN_HEIGHT,
      backgroundColor:'#034'
  	});

  	this.boundBox = new fabric.Rect({
  		width: 500,
  		height: 600,
  		fill:'transparent',
  		stroke: '#666',
  		strokeDashArray:[5,5]
  	});

  	this.shape = new fabric.Circle({
      radius: 200,
  		fill: 'red',
  		left: 100,
  		top: 100
  	});

  	this.canvas.add(this.boundBox);
  	this.canvas.add(this.shape);
  	this.canvas.centerObject(this.boundBox);
  }

  onAddCircle() {
    this.canvas.add(this.shape);
  }



  }


