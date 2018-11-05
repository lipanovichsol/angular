import {Component} from '@angular/core'; 
import {Profesor} from './profesor'; 
import {PeticionesServices} from '../app/services/peticiones.services';


@Component({
    selector: 'app-profesor',
    templateUrl: './profesor.component.html', 
    providers: [PeticionesServices]
})

export class ProfesorComponent{
    public nombre: string; 
    public edad: number;
    public casado: boolean;
    public trabajos: Array<any> = ['Profesor','Webdev','Barrendero'];
    public profesor: Profesor; 
    public profesorado: Array<Profesor>;
    public colorAEvaluar: string;
    public admin: boolean; 
    public apiPosts;

    constructor(
        private _peticionesService: PeticionesServices      //el servicio se pasa por parametro, para que el componente tenga disponible el servicio. 
    ){ //todo lo que escribo en el constructor se ejecuta primero cuando cargo un componente
        this.nombre='Profe';
        this.edad= 23;
        this.casado=true;
        // this.profesor=new Profesor("",0,"",false); //inicializar en vacio
        this.profesor=new Profesor('Lucas',38,'Filosofia',false);
        this.profesorado = [
            this.profesor,
            new Profesor('Sol',23,'Matematica',true),
            new Profesor('Nicolas',40,'Historia',true),
            new Profesor('Vanesa',18,'Geografia',false),
        ];
        this.colorAEvaluar= "pink";
        this.admin=false; 
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // console.log(this.profesor);
        // console.log(this._peticionesService.getPrueba());
        this._peticionesService.getPosts().subscribe(
            res => {
                this.apiPosts=res;
                if(!this.apiPosts)
                console.log("Respuesta vacia de la API");
            }, 
            error => {   //solo va a aparecer si la rta http no es 200-OK
                console.log(<any>error);
            }
        );
    }

    pulsarBoton(){
        console.log("Pulsaste el boton");
        this.admin = !this.admin; 
    }


}

