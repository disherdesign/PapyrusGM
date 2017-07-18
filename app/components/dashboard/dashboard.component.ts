import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
characters: Object;
owner: String;
user:Object;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
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


  	  this.authService.getCharactersByUser("danny").subscribe(dashboard => {
  		this.characters = dashboard.characters;
      console.log(this.characters)
  	},
  		err => {
  			console.log(err);
  			return false;
  		})
    }

  






}
