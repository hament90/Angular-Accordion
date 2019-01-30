import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Accordion';
  showView:String= 'basic';


  checkView( type:String ){
    console.log(type);
    this.showView=type;
  }
}
