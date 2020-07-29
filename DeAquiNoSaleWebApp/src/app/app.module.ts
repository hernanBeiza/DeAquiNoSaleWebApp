import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensajeModalComponent } from './mensaje-modal/mensaje-modal.component';
import { SecretosComponent } from './secretos/secretos.component';
import { TopComponent } from './top/top.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    MensajeModalComponent,
    SecretosComponent,
    TopComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,FormsModule, ReactiveFormsModule,
    NgbModule,NgbModalModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ MensajeModalComponent ]
})
export class AppModule { }
