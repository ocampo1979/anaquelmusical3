import { Injectable } from '@angular/core';

@Injectable()
export class DiscoService {
  disco = [
    {id_disco: 1,
     artista: 'Tony Rojas',
     nombre_album: 'Introducing',
     sello: 'Rico',
     lanzamiento: '1970',
     precio: '30000',
     cedula_coleccionista: '75092471'}
  ];
  constructor() { }
  getDisco(){
    return this.disco;
  }
}
