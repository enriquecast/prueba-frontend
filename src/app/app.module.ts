import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarAplicationComponent } from './componentes/nav-bar-aplication/nav-bar-aplication.component';
import { BodyAplicationComponent } from './componentes/body-aplication/body-aplication.component';
import { AsideFilterComponent } from './componentes/aside-filter/aside-filter.component';
import { ContainerAplicationComponent } from './componentes/container-aplication/container-aplication.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalDescriptionComponent } from './componentes/modal-description/modal-description.component';
import { IndexAplicationComponent } from './componentes/index-aplication/index-aplication.component'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PaginaProductosComponent } from './pagina-productos/pagina-productos.component';

import {DroneService} from './services/drone.service';
import { HttpClientModule } from '@angular/common/http';
import { CarShoppingComponent } from './componentes/car-shopping/car-shopping.component';
import { SearchFilterService } from './services/shared/search-filter/search-filter.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarAplicationComponent,
    BodyAplicationComponent,
    AsideFilterComponent,
    ContainerAplicationComponent,
    ModalDescriptionComponent,
    IndexAplicationComponent,
    PaginaProductosComponent,
    CarShoppingComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DroneService,
    SearchFilterService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
