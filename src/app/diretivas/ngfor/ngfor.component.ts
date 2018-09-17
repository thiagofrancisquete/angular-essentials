import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  cursos: string[] = ['angular 2', 'java', 'phonegap'];
  constructor() { }

  ngOnInit() {
  }

}
