import { LoggerService } from './../logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world-di',
  templateUrl: './hello-world-di.component.html',
  styleUrls: ['./hello-world-di.component.scss']
})
export class HelloWorldDiComponent implements OnInit {
  count= 0;

  constructor(private logger: LoggerService) { }

  onLogMe(){
    this.logger.writeCount(this.count);
    this.count++;
  }

  ngOnInit(): void {
  }

}
