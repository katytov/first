import {Component} from '@angular/core';

@Component({
    selector: 'my-achievements',
    templateUrl: 'app/achievements/achievement-list.cmp.html'
})

export class AchievementListComponent{
	pageTitle: string = 'My Achievements';
	Achievements: any[] = [
		{
			image: '',
			isActive: true
		}
		
	]
}