import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-newcharacter',
  templateUrl: './newcharacter.component.html',
  styleUrls: ['./newcharacter.component.css']
})
export class NewcharacterComponent implements OnInit {
	owner: String;
	game: String;
	characterConcept: String;
	name: String;
	stock: String;
  belief1: String;
  belief2: String;
  belief3: String;
  instinct1: String;
  instinct2: String;
  instinct3: String;
  lifepath1: any;
  lifepath2: any;
  lifepath3: any;



  constructor(
  private authService:AuthService
  , private router:Router
  ,	private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    	this.authService.getProfile().subscribe(profile => {
  		this.owner = profile.user.username;
  	},
  	err => {
  		console.log(err);
  		return false;
  	});
  }

  onNewcharacterSubmit(){
  	const character = {
  		owner: this.owner,
  		game: this.game,
  		characterConcept: this.characterConcept,
  		name: this.name,
  		stock: this.stock,
      beliefs: {
        belief1:this.belief1,
        belief2:this.belief2,
        belief3:this.belief3
      },
      instincts: {
        instinct1:this.instinct1,
        instinct2:this.instinct2,
        instinct3:this.instinct3
      },
      lifepaths: [
        {
          lifepath:this.lifepath1
        },
        {
          lifepath:this.lifepath2
        },
        {
          lifepath:this.lifepath3
        }
      ],
      traits: []

  	}

      // Register Character
    this.authService.createCharacter(character).subscribe(data => {
      if(data.success){
        this._flashMessagesService.show('Character Created', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);
      } else {
        this._flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/newcharacter']);

      }
    })

    }

}
