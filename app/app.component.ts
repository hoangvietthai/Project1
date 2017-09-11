import { Component,ViewChild } from '@angular/core';
import {TutorialComponent} from './tutorial.component';
@Component({
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
    templateUrl:'../app/app.component.html',
    styleUrls: ['../app/app.component.css']
})
export class AppComponent { 
   

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
    public cities= [{id:1, name: "Ha Noi"},{id:2, name: "HCM"}];
    onSubmit(value:any)
    {
        console.log(value);
    }
}