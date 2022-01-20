import { Component, OnInit } from '@angular/core';
import { Sign } from '../shared/sign';
import { ZodiacService } from '../services/zodiac.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sign!:Sign[];
  SelectedSign!:Sign;
  constructor(private zodiacService:ZodiacService) { }

  ngOnInit(): void {
    this.sign = this.zodiacService.getSign();
  }

  onSelect(sign:Sign){
    this.SelectedSign = sign;
  }
}
