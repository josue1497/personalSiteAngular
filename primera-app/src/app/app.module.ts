import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { RegistroComponent } from './registro/registro.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SesionComponent } from './sesion/sesion.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'sesion', component: SesionComponent },
  { path: '', component: PresentacionComponent, pathMatch:'full' },
  { path: '**', redirectTo:'/', pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    RegistroComponent,
    PresentacionComponent,
    InformacionComponent,
    SesionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
