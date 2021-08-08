import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngIf';

  disabledBox=true;
  enableBox(){
    this.disabledBox=false;
  }
  public show=true;
  public show2=false;
  public show3="no";

}
