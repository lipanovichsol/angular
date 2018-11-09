import { Component, OnInit } from '@angular/core';
import { Verdura } from './verdura';
import {PeticionesServices} from '../../app/services/peticiones.services';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.component.html',
  styleUrls: ['./verduras.component.css'],
  
  providers: [PeticionesServices]
})

export class VerdurasComponent implements OnInit {

  public formNombre: string; 
  public formPrecio: string;
  public formDescripcion: string;
  public formGuardar: string;
  public verdura: Verdura;

  constructor( private _peticionesService: PeticionesServices,
    private _route: ActivatedRoute, private _router: Router) {
    this.formNombre = "Nombre de la verdura";
    this.formPrecio = "Indique el precio de la verdura";
    this.formDescripcion = "Describa la verdura";
    this.formGuardar = "Guardar verdura";
    this.verdura = new Verdura('',0,'');
   }

  ngOnInit() {
  }

  redirigir(){
    this._router.navigate(['./profesor','asdasf']);
  }

  guardarForm(){
    console.log("ENTRA A GUARDAR FORM");
    console.log(this.verdura);
    this._peticionesService.setVerdura(this.verdura).subscribe( res => {
      console.log(res);
      this._router.navigate(['/profesor',res.id])
    }, 
    error => {   //solo va a aparecer si la rta http no es 200-OK
      console.log(<any>error);
  });
  }
}
