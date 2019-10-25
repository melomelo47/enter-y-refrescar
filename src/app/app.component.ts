import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  inputEntrada:string[] = [];

  ngOnInit(){

  }

  public onEnter(str:string){
      this.inputEntrada.push(str);
  }

}
