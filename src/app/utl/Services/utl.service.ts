import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/ult.interface';

@Injectable({
  providedIn: 'root'
})
export class UtlService {
  _alumnosUtl:AlumnosUtl[]=[
    {
      nombre: 'Gustavo',
      edad: 20
    },
    {
      nombre: 'Juan Carlos',
      edad: 21
    },
    {
      nombre: 'Rosa',
      edad: 24
    }
  ]

  constructor() { }

  get alumnos():AlumnosUtl[]{
    return [...this._alumnosUtl];
  }
  
  agregarNuevoAlumno(datos:AlumnosUtl){
    this._alumnosUtl.push(datos)

  }
  

}
