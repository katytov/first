"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//import { RouterLink } from '@angular/router-deprecated';
var header_cmp_1 = require('./header/header.cmp');
var upload_achievements_cmp_1 = require('./admin/upload-achievements.cmp');
var grant_achievements_cmp_1 = require('./admin/grant-achievements.cmp');
var achievements_list_cmp_1 = require('./achievements/achievements-list.cmp');
var contact_cmp_1 = require('./contact/contact.cmp');
var home_cmp_1 = require('./home/home.cmp');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/']);
    };
    AppComponent = __decorate([
        router_1.Routes([
            { path: '/admin/create-achievements', component: upload_achievements_cmp_1.UploadAchievementsComponent },
            { path: '/moderator/grant-achievements', component: grant_achievements_cmp_1.GrantAchievementsComponent },
            { path: '/my-profile', component: achievements_list_cmp_1.AchievementListComponent },
            { path: '/contact', component: contact_cmp_1.ContactComponent },
            { path: '/', component: home_cmp_1.HomeComponent },
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "   \n        <nav class=\"navbar navbar-primary\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>                        \n                </button>\n                <a class=\"navbar-brand\" href=\"#\">Logo</a>\n                </div>\n                <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"active\"><a [routerLink]=\"['/']\">Home</a></li>\n                    <li><a [routerLink]=\"['/admin/create-achievements']\">Create achievements</a></li>\n                    <li><a [routerLink]=\"['/moderator/grant-achievements']\">Grant achievements to user</a></li>\n                    <li><a [routerLink]=\"['/my-profile']\">See profile</a></li>\n                    <li><a [routerLink]=\"['/contact']\">Contact</a></li>\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n                </ul>\n                </div>\n            </div>\n            </nav>\n\n            <router-outlet></router-outlet>     \n    ",
            directives: [
                router_1.ROUTER_DIRECTIVES,
                //RouterLink,
                header_cmp_1.HeaderComponent,
                upload_achievements_cmp_1.UploadAchievementsComponent,
                grant_achievements_cmp_1.GrantAchievementsComponent,
                achievements_list_cmp_1.AchievementListComponent,
                contact_cmp_1.ContactComponent,
                home_cmp_1.HomeComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map