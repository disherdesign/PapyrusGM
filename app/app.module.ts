import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http'  ;
import { CreatorModule } from './components/nodegarden/creator.module';
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';


import {ValidateService} from './services/validate.service'
import {AuthService} from './services/auth.service'
import {FlashMessagesModule} from 'angular2-flash-messages'
import {AuthGuard} from './guards/auth.guard';
import { routing } from './app.routing';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { NewcharacterComponent } from './components/newcharacter/newcharacter.component';
import { BurningwheelComponent } from './components/gameboard/games/burningwheel/burningwheel.component';
import { CharacterInfoComponent } from './components/dashboard/character-info/character-info.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard/newcharacter', component: NewcharacterComponent, canActivate:[AuthGuard]},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'dashboard/:charactername', component: CharacterInfoComponent, canActivate:[AuthGuard]},
  {path:'gameboard', component: GameboardComponent, canActivate:[AuthGuard]},
  {path:'gameboard/burningwheel', component: BurningwheelComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    GameboardComponent,
    NewcharacterComponent,
    BurningwheelComponent,
    CharacterInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    CreatorModule,
    routing,
    FlexLayoutModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
