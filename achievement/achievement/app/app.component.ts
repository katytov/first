import {Component} from '@angular/core';
import {AchievementListComponent} from './achievements/achievements-list.cmp';
import {HeaderComponent} from './header/header.cmp';

@Component({
    selector: 'my-app',
    template: `   
        <my-header></my-header> 
        <my-achievements></my-achievements>   
    `,
    directives: [AchievementListComponent, HeaderComponent]
})
export class AppComponent { }
