import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world-bindings',
  templateUrl: './hello-world-bindings.component.html',
  styleUrls: ['./hello-world-bindings.component.scss']
})
export class HelloWorldBindingsComponent implements OnInit {

  fontColor='blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello World Bindings';
  sayMessage(){
    alert(this.message);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
