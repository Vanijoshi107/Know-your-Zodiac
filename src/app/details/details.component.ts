import { Component, Input, OnInit } from '@angular/core';
import { Sign } from '../shared/sign';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  Signs!:Sign;
  constructor() { }

  ngOnInit(): void {
  }

}
