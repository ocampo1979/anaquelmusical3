import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiscoComponent } from './disco/disco.component';

import { DiscoDataServerService } from "./servicios/disco-data-server.service";

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {path: 'disco', component: DiscoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DiscoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  providers: [DiscoDataServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
