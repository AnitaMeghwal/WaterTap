import { 
  // Trigger is imported here
  trigger, 
  state, 
  style, 
  transition, 
  animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  
    // Trigger is used here
    trigger('geek',[
      state('green', style({
         'opacity': 1,
        transform: 'translateX(0)'
      })),
      state('blu', style({
        
        'opacity': 0,
        transform: 'translateX(0)'
      })),
      transition('green => blu',animate(120)),
      transition('blu => green',animate(100))
    ]),
     trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(100%)'}))
      ])
    ])
     
  ]
})
export class AppComponent {
  title = 'tapwater';
   state = 'green';
   visible = true;
   show = true;

  anim(){
    this.state == 'green' ?
    this.state = 'blu' : this.state = 'green';
  }
  flow(){
    this.visible == true ?
    this.visible = false : this.visible = true;
  }

  
}
