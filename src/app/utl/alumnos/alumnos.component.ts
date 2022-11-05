import { Component, Input } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/ult.interface';
import { UtlService } from '../Services/utl.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  //@Input() alumnosUtl:AlumnosUtl[]=[];

  get alumnos(){
    return this.alumnosUtl.alumnos;
  }

  constructor(private alumnosUtl:UtlService){

  }

}
