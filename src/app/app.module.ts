import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ValoresComponent } from './componentes/valores/valores.component';
import { ValorComponent } from './componentes/valores/valor/valor.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ValoresComponent,
    ValorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
