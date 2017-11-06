import { Injectable } from '@angular/core';
import { Discos } from './disco';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class DiscoDataServerService {

  discoList: Array<Discos>;

  constructor(private http: HttpClient) {
  }
  cargarDiscos() {
    this.http.get('http://localhost:8080/anaquelmusical/webresources/entidades.discos')
    .subscribe(data => {
      this.discoList = data as Array<Discos>;
    });  
  }
  saveDiscos(disco: Discos) {
    const body = {id_disco: disco.id_disco, 
                  artista: disco.artista, 
                  nombre_album: disco.nombre_album, 
                  sello: disco.sello, 
                  lanzamiento: disco.lanzamiento,
                  precio: disco.precio,
                  cedula_coleccionista: disco.cedula_coleccionista};
    this.http.post('http://localhost:8080/anaquelmusical/webresources/entidades.discos', body)
    .subscribe(data => {
      this.cargarDiscos();
    });
  }
}
