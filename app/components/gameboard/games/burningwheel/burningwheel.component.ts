import { Component, OnInit } from '@angular/core';
import 'fabric';
import { ElementRef } from '@angular/core';

declare let fabric;



@Component({
  selector: 'app-burningwheel',
  templateUrl: './burningwheel.component.html',
  styleUrls: ['./burningwheel.component.css']
})
export class BurningwheelComponent implements OnInit {
		private canvas;
		private boundBox;
  	private coin;
  	private SCREEN_HEIGHT;
  	private SCREEN_WIDTH;
    private drawingMode;
    private circle;
    private square;
    private text;
    private group;
    private dyeFace;
    private d1;
    private d2;
    private d3;
    private d4;
    private d5;
    private d6;
    private plusOrMinus;
    private tests;
    private numDice;
    private diceRolled;
    private message;
    private messages;


  constructor(private element: ElementRef) { }

  ngOnInit() {

  this.messages = [];

    this.plusOrMinus  = Math.random() < 0.5 ? 1 : 1;
     this.SCREEN_WIDTH = this.element.nativeElement.parentElement.clientWidth;
    this.SCREEN_HEIGHT = this.element.nativeElement.parentElement.clientHeight;

  	this.canvas = new fabric.Canvas('canvas', {
//  	width:this.SCREEN_WIDTH,
  		height:this.SCREEN_WIDTH,
//      backgroundColor:'#034',
//      setBackroundImage:,
      isDrawingMode: false,
  	});

    this.canvas.setBackgroundImage('https://s-media-cache-ak0.pinimg.com/originals/2b/08/32/2b083225b9fac1e7db5b77d0210274d0.jpg', this.canvas.renderAll.bind(this.canvas), {
    backgroundImageOpacity: 0.1,
    backgroundImageStretch: true
});

  	this.boundBox = new fabric.Rect({
  		width: 500,
  		height: 600,
  		fill:'transparent',
  		stroke: '#666',
  		strokeDashArray:[5,5]
  	});


     this.coin = new fabric.Circle({
      radius: 100,
      fill: 'yellow',
      left: 100,
      top: 100
    });


this.dyeFace = new fabric.Circle({
  radius: 5,
  fill: '#111',
  originX: 'center',
  originY: 'center',
  left:25,
  top:25
});

this.square = new fabric.Rect({
  height: 50,
  width: 50,
  fill: '#eef',
});

this.dyeFace = new fabric.Circle({
  radius: 5,
  fill: '#111',
  originX: 'center',
  originY: 'center',
  left:25,
  top:25
});

this.d1 = new fabric.Group([ this.square.clone(), this.dyeFace.clone() ], {
  left: (this.canvas.width/2) * (Math.random() * this.plusOrMinus),
  top: (this.canvas.height/2) * (Math.random() * this.plusOrMinus)
});

this.d2 = new fabric.Group([ this.square.clone(), this.dyeFace.clone().set({left: 12.5, top: 37.5}), this.dyeFace.clone().set({left: 37.5, top: 12.5}) ], {
  left: (this.canvas.width/2) * (Math.random() * this.plusOrMinus),
  top: (this.canvas.height/2) * (Math.random() * this.plusOrMinus)
});

this.d3 = new fabric.Group([
 this.square.clone(), 
 this.dyeFace.clone(),
 this.dyeFace.clone().set({left: 12.5, top: 37.5}), 
 this.dyeFace.clone().set({left: 37.5, top: 12.5})
  ],
{
  left: (this.canvas.width/2) * (Math.random() * this.plusOrMinus),
  top: (this.canvas.height/2) * (Math.random() * this.plusOrMinus)
});

this.d4 = new fabric.Group([
 this.square.clone(), 
 this.dyeFace.clone().set({left: 12.5, top: 37.5}), 
 this.dyeFace.clone().set({left: 12.5, top: 12.5}), 
 this.dyeFace.clone().set({left: 37.5, top: 12.5}),
 this.dyeFace.clone().set({left: 37.5, top: 37.5})
  ],
{
  left: (this.canvas.width/2) * (Math.random() * this.plusOrMinus),
  top: (this.canvas.height/2) * (Math.random() * this.plusOrMinus)
});

this.d5 = new fabric.Group([
 this.square.clone(), 
 this.dyeFace.clone(),
 this.dyeFace.clone().set({left: 12.5, top: 37.5}), 
 this.dyeFace.clone().set({left: 12.5, top: 12.5}), 
 this.dyeFace.clone().set({left: 37.5, top: 12.5}),
 this.dyeFace.clone().set({left: 37.5, top: 37.5})
  ],
{
  left: (this.canvas.width/2) * (Math.random() * this.plusOrMinus),
  top: (this.canvas.height/2) * (Math.random() * this.plusOrMinus)
});

this.d6 = new fabric.Group([
 this.square.clone(), 
 this.dyeFace.clone().set({left: 12.5}), 
 this.dyeFace.clone().set({left: 12.5, top: 37.5}), 
 this.dyeFace.clone().set({left: 12.5, top: 12.5}), 
 this.dyeFace.clone().set({left: 37.5}),
 this.dyeFace.clone().set({left: 37.5, top: 12.5}),
 this.dyeFace.clone().set({left: 37.5, top: 37.5})
  ],
{
  left: (this.canvas.width/2) * (Math.random() * this.plusOrMinus),
  top: (this.canvas.height/2) * (Math.random() * this.plusOrMinus)
});



this.text = new fabric.Text('hello world', {
  fontSize: 30,
  originX: 'center',
  originY: 'center'
});


    this.canvas.add(this.boundBox);
  	this.canvas.centerObject(this.boundBox);

  }

    onAddCoin(){
    this.coin = new fabric.Circle({
      radius: 25,
      fill: 'yellow',
      left: Math.random() *this.canvas.width,
      top: Math.random() *this.canvas.height
    });

      this.canvas.add(this.coin);
      console.log('pushed')
    }

    rollDice(n) {
    this.tests = {
      d6 : function() {
      return (Math.floor(Math.random() * (7 - 1)) + 1); 
  },
  alert : function() {
    var n = this.d6();
    console.log(n)
    
  },
  mult : function(n) {
    var arr=[];
    for (var i=0;i<n;i++) {
      arr[i]=this.d6();
    }

    return arr.sort();
  }
}


var diceRolled = this.tests.mult(n).join(", ")
this.messages.push({msg:"Rolled: " + diceRolled})
var diceFunctions = [
  this.canvas.add(this.d1),
  this.canvas.add(this.d2),
  this.canvas.add(this.d3),
  this.canvas.add(this.d4),
  this.canvas.add(this.d5),
  this.canvas.add(this.d6)
]
console.log(diceRolled)
for (var i=0; i<diceRolled.length; i++) {
  
}

}    

postMessage() {
  this.messages.push({msg:this.message, date:new Date});
  this.message = "";
}







    deleteSelectedObject(){
      this.canvas.getActiveObject().remove();
    }


    }
