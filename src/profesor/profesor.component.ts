import {Component} from '@angular/core'; 
import {Profesor} from './profesor'; 
@Component({
    selector: 'app-profesor',
    templateUrl: './profesor.component.html'
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

    constructor(){ //todo lo que escribo en el constructor se ejecuta primero cuando cargo un componente
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
        console.log(this.profesor);
    }

    pulsarBoton(){
        console.log("Pulsaste el boton");
        this.admin = !this.admin; 
    }


}

