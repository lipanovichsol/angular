import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})



export class FrutaComponent implements OnInit {

   public colorSeleccionado: string;

  constructor() { 
    this.colorSeleccionado='blue';
  }

  ngOnInit() {
  }

}
