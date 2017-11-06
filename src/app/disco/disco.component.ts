import { Component, OnInit } from '@angular/core';
import { DiscoDataServerService } from '../servicios/disco-data-server.service';
import { Disco } from '../disco/disco';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css']
})
export class DiscoComponent implements OnInit {
  disco: any[];
  constructor(private discoService: DiscoDataServerService) { }

  ngOnInit() {
    this.discoService.cargarDiscos();
  }

}
