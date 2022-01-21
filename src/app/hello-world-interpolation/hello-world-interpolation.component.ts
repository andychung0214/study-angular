import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html',
  styleUrls: ['./hello-world-interpolation.component.scss']
})
export class HelloWorldInterpolationComponent implements OnInit {
  message = 'Hello, World!(Interpolation)';
  constructor() { }

  ngOnInit(): void {
  }



}
