import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/ult.interface';
import { UtlService } from '../Services/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() alumnosUtl:AlumnosUtl[]=[];
  @Output() onNuevoAlumno: EventEmitter<AlumnosUtl> = new EventEmitter() ;

  @Input() regAlumno:AlumnosUtl={
    nombre : '',
    edad : 0
  }
    
  constructor(private alumnosutl:UtlService){

  }

  agregar(){
    //this.onNuevoAlumno.emit(this.regAlumno);
    this.alumnosutl.agregarNuevoAlumno(this.regAlumno);
    this.regAlumno={
      nombre: '',
      edad : 0
    }
  }
}