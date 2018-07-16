import {RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';


//referencia rutaspara llamar los componentes
import {IndexAplicationComponent} from './componentes/index-aplication/index-aplication.component';
import {ContainerAplicationComponent} from './componentes/container-aplication/container-aplication.component';
import { BodyAplicationComponent } from './componentes/body-aplication/body-aplication.component';
import { ModalDescriptionComponent } from './componentes/modal-description/modal-description.component';


// arreglo de rutas (todas las rutas)
const appRouters: Routes = [

    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: ContainerAplicationComponent
    },
    {
        path:'productos',
        component: BodyAplicationComponent
    },

    {
        path:'description',
        component: BodyAplicationComponent
    },

   

]


@NgModule({
    imports: [ RouterModule.forRoot(appRouters, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }