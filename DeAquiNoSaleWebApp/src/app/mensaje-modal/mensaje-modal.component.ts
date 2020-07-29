import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from "@angular/forms";

import { faPen, faHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SecretoService } from './../services';
import { Secreto, Respuesta } from './../models';

@Component({
  selector: 'app-mensaje-modal',
  templateUrl: './mensaje-modal.component.html',
  styleUrls: ['./mensaje-modal.component.scss']
})
export class MensajeModalComponent implements OnInit, AfterViewInit {

  public mensajeFormGroup: FormGroup;
  public mensajeControl: AbstractControl;

  @ViewChildren("inputMensaje") inputMensaje: QueryList<ElementRef>;

  public flagEnviando:boolean = false;

  public faPen:IconDefinition = faPen;

  constructor(public activeModal: NgbActiveModal, private formBuilder:FormBuilder, 
  	private secretoService:SecretoService) { }

  ngOnInit() {
    this.mensajeFormGroup = this.formBuilder.group({
      'mensaje': ['', Validators.compose([Validators.required])],
    });
    this.mensajeControl = this.mensajeFormGroup.controls['mensaje'];
  }

  ngAfterViewInit() {
    if(this.inputMensaje){
      this.inputMensaje.first.nativeElement.focus();      
    }
  }

  public onSubmit(values:any):void {
  	
  	if(values){
	  	
	  	let secreto = new Secreto();
	  	secreto.mensaje = values.mensaje;

	    if(this.mensajeFormGroup.valid){
		  	this.secretoService.guardar(secreto).subscribe(data=>{
		  		console.log(data);
          if(data.result){
            this.activeModal.dismiss();
            this.mensajeFormGroup.reset();
            Swal.fire("¡Súper!","Tú secreto ya se hizo público","success");
          } else {
            Swal.fire("Rayos...","No se pudo subir tu secreto","error");
          }
		  	},error=>{
		  		console.error(error);
		  	});
		  }  		
  	}

  }

}