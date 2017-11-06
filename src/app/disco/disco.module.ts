import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DiscoDataServerService } from './disco-data-server.service';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers:[DiscoDataServerService]
})
export class ClienteModule { }
