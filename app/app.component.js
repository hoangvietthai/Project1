"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        /* public today=Date.now();
         public names=['Mr.A',];
         public agree: number=0;
         public disagree: number=0;
         @ViewChild(TutorialComponent)
         private tutorialComponent: TutorialComponent;
         checkVote(event: any)
         {
             if (event.agree) this.agree++
                 else this.disagree++;
     
             console.log("ABC = ", event.abc);
         };
         changeName(){
             this.tutorialComponent.setName('Change');
         }*/
        this.cities = [{ id: 1, name: "Ha Noi" }, { id: 2, name: "HCM" }];
    }
    AppComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            /*template: `
               <h1>{{title|lowercase}} </h1>
                <p>Date today: {{today|date:'short'}}</p>
               <button (click)="changeName()">Change </button>
                Agree number: {{agree}}
                <br>
                Disagree number: {{disagree}}
                <my-tutorial *ngFor="let person of names" [name]="person" (onVote)="checkVote($event)"></my-tutorial>
              
                `*/
            templateUrl: '../app/app.component.html',
            styleUrls: ['../app/app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map