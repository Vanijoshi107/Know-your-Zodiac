import { Injectable } from '@angular/core';
import { Sign } from '../shared/sign';
import { SIGNS } from '../shared/signs';

@Injectable({
  providedIn: 'root'
})
export class ZodiacService {

  constructor() { }
  getSign():Sign[]{
    return SIGNS;
  }
  getSigns(id:string):Sign{
    return SIGNS.filter((sign)=>(sign.id ===id))[0];
  }
}
