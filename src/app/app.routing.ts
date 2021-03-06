import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import { FrutaComponent } from './fruta/fruta.component'
import { ProfesorComponent } from './profesor/profesor.component'
import { DibujoComponent } from './dibujo/dibujo.component'
import { VerdurasComponent } from './verduras/verduras.component'

const appRoutes : Routes = [
    {path: '', component: ProfesorComponent}, //Ruta Inicial 
    {path: 'profesor',component: ProfesorComponent }, 
    {path: 'profesor/:nombre',component: ProfesorComponent }, 
    {path: 'fruta',component: FrutaComponent}, 
    {path: 'dibujo', component: DibujoComponent}, 
    {path: 'verduras', component: VerdurasComponent},
    {path: '**',component: FrutaComponent}  //Ruta cuando falle, por defecto
];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes); 



