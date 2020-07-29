import { Component, OnInit } from '@angular/core';

import { faPen, faHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

import { MensajeModalComponent } from './../mensaje-modal/mensaje-modal.component';
import { SecretoService } from './../services';
import { Secreto } from './../models';


@Component({
  selector: 'app-secretos',
  templateUrl: './secretos.component.html',
  styleUrls: ['./secretos.component.scss']
})
export class SecretosComponent implements OnInit {

 public secretos:Array<Secreto> = new Array<Secreto>();

  public faPen:IconDefinition = faPen;

  public ngbModalRef:NgbModalRef;
	constructor(private secretoService:SecretoService, private modalService:NgbModal) {

	}

  ngOnInit() {
		this.cargar();
  }

  private cargar():void {
  	this.secretoService.obtener().subscribe(data=>{
  		console.log(data);
  		if(data){
  			this.secretos = data;
  		} else {
        Swal.fire('Rayos...', 'No hay secretos aún', 'error');
      }
  	},error=>{
  		console.error(error);
  	});

  }

  public dejarMiMensaje():void {
  	console.log("dejarMiMensaje");
    this.ngbModalRef = this.modalService.open(MensajeModalComponent, {windowClass: 'modal-in', size: 'lg', backdrop: "static"});
    //this.ngbModalRef.componentInstance

    this.ngbModalRef.result.then(valueClosed => {
      console.log(valueClosed);
      this.cargar();
    }).catch(valueDismiss => {
      console.log(valueDismiss);
      this.cargar();
    });
    
  }

}
