import { Injectable } from '@angular/core';
import { Disco } from '../disco/disco';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class DiscoDataServerService {

  discosList: Array<Disco>;

  constructor(private http: HttpClient) {
  }
  cargarDiscos() {
    this.http.get('http://localhost:8080/anaquelmusical/webresources/entidades.discos')
    .subscribe(data => {
      this.discosList = data as Array<Disco>;
    });  
  }

  saveDiscos(disco: Disco) {
    const body = {
                  idDisco: disco.id_disco, 
                  artista: disco.artista, 
                  nombreAlbum: disco.nombre_album, 
                  sello: disco.sello, 
                  lanzamiento: disco.lanzamiento,
                  precio: disco.precio,
                  cedulaColeccionista: { 
                    cedula: disco.cedula_coleccionista
                  }
                };
    this.http.post('http://localhost:8080/anaquelmusical/webresources/entidades.discos', body)
    .subscribe(data => {
      this.cargarDiscos();
    });
  }
}
