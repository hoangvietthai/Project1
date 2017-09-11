import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
   selector:'my-tutorial',
   template: `
   <p [ngClass]="{classOne: cone,classTwo: ctwo}">My name is Thai </p>
   <button (click)="toggle()">Toggle</button>
   <p>Child component: {{name}}</p>
   <button [disabled]="voted" (click)=vote(true)>Agree</button>
   <button [disabled]="voted" (click)=vote(false)>Disagree</button>
   
   `,
   
   styles:[
       `
       .classOne {
            color: yellow;
       } 
       .classTwo {
           background-color: black;
       }
       `
    ]
  
})
export class TutorialComponent{
    @Input() name: string;
    @Output() onVote=new EventEmitter();
   public cone=true;
   public ctwo=true;
   toggle (){
    this.cone=!this.cone;
    this.ctwo=!this.ctwo;
   };
   setName(name: string)
   {
       this.name=name;
   }
   public voted=false;
   vote(agree: boolean){
      this.voted=true;
      this.onVote.emit({agree: agree, abc: 1});
   }

}