import { Component, OnInit, OnDestroy} from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
characters: Object;
owner: String;
user:Object;
charactername: String;
private sub: any;

  constructor(private authService:AuthService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.charactername = params['charactername']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });


  	    	this.authService.getProfile().subscribe(dashboard => {
      this.user = {
        name:dashboard.user.username,
        username: dashboard.user.name
      }
  		this.owner = dashboard.user.username;

  	},
  	err => {
  		console.log(err);
  		return false;
  	});


  	  this.authService.getCharactersByUser("danny").subscribe(characterInfo => {
  		this.characters = characterInfo.characters;
      console.log(this.characters)
  	},
  		err => {
  			console.log(err);
  			return false;
  		})
  }

    ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
