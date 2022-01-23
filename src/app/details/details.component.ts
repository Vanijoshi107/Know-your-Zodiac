import { Component, Input, OnInit } from '@angular/core';
import { Sign } from '../shared/sign';
import { ZodiacService } from '../services/zodiac.service';
import { Params, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  Signs!:Sign;
  constructor(private Zodiac:ZodiacService,
              private route:ActivatedRoute,
              private location:Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Signs = this.Zodiac.getSigns(id);
  }

  goBack():void{
    this.location.back();
  }

}
