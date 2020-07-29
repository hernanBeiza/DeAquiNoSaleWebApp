export class Secreto {
  id: number;
  mensaje:string;
  fecha:string;
  valid:number;

	constructor(init? : Partial<Secreto>) {
		Object.assign(this, init);		
  }

}