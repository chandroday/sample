import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
public value:any = 0;
public add(){
this.value=this.value+1;

}
public sub(){
this.value=this.value-1;

}
}
