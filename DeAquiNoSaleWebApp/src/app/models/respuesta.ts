export class Respuesta {
  result: boolean;
  mensaje:string;
  
	constructor(init? : Partial<Respuesta>) {
		Object.assign(this, init);		
  }

}