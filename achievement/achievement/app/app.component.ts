import {Component, OnInit} from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
//import { RouterLink } from '@angular/router-deprecated';


import {HeaderComponent} from './header/header.cmp';
import {UploadAchievementsComponent} from './admin/upload-achievements.cmp';
import {GrantAchievementsComponent} from './admin/grant-achievements.cmp';
import {AchievementListComponent} from './achievements/achievements-list.cmp';
import {ContactComponent} from './contact/contact.cmp';
import {HomeComponent} from './home/home.cmp';



@Routes([
  {path: '/admin/create-achievements', component: UploadAchievementsComponent},
  {path: '/moderator/grant-achievements',        component: GrantAchievementsComponent},
  {path: '/my-profile',        component: AchievementListComponent},
  {path: '/contact',        component: ContactComponent},
  {path: '/',        component: HomeComponent},
 // {path: '/hero/:id',      component: HeroDetailComponent}
])


@Component({
    selector: 'my-app',
    template: `   
        <nav class="navbar navbar-primary">
            <div class="container-fluid">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                </button>
                <a class="navbar-brand" href="#">Logo</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="active"><a [routerLink]="['/']">Home</a></li>
                    <li><a [routerLink]="['/admin/create-achievements']">Create achievements</a></li>
                    <li><a [routerLink]="['/moderator/grant-achievements']">Grant achievements to user</a></li>
                    <li><a [routerLink]="['/my-profile']">See profile</a></li>
                    <li><a [routerLink]="['/contact']">Contact</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
                </div>
            </div>
            </nav>

            <router-outlet></router-outlet>     
    `,
    directives: [
        ROUTER_DIRECTIVES,
        //RouterLink,
        HeaderComponent,
        UploadAchievementsComponent,
        GrantAchievementsComponent,
        AchievementListComponent, 
        ContactComponent,
        HomeComponent
        ]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/']);
  }
}
