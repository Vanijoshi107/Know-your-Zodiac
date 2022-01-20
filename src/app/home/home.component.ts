import { Component, OnInit } from '@angular/core';
import { Sign } from '../shared/sign';
import { SIGNS } from '../shared/signs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sign:Sign[]= SIGNS;
  constructor() { }

  ngOnInit(): void {
  }

}
