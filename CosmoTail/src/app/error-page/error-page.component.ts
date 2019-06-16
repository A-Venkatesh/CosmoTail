import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `

  <div class="" >
    <h1 class="text-center ">
Page Not Found
    </h1>
    <br>
    <img class="rounded mx-auto d-block" src="https://www.thelocal.de/userdata/images/article/5c336e97f4f1cd89b3fd13b965055ca9981ebaa38823f975fa1d32694348bd41.jpg">
    </div>

  `,
  styles: []
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
