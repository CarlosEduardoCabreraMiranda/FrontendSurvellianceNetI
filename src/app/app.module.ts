import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { leftComponent } from './left/left.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogoService } from './catalogo/catalogo.service';
import { HomeComponent } from './home/home.component';
import { CotizarComponent } from './cotizar/cotizar.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './empleados/form.component'
import { EmpleadoService } from './empleados/empleado.service';

const routes: Routes = [
 {path: '', redirectTo:'./home', pathMatch: "full"},
 {path: 'home', component: HomeComponent},
 {path: 'nosotros', component: NosotrosComponent},
 {path: 'catalogo', component: CatalogoComponent},
 {path: 'clientes', component: ClientesComponent},
 {path: 'cotizar', component: CotizarComponent},
 {path: 'empleados', component: EmpleadosComponent},
 { path: 'empleados/form', component: FormComponent},
 {path: 'empleados/form/:id', component:FormComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    leftComponent,
    ClientesComponent,
    CatalogoComponent,
    HomeComponent,
    CotizarComponent,
    EmpleadosComponent,
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService,CatalogoService,EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
