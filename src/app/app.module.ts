import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExpeducComponent } from './componentes/expeduc/expeduc.component';
import { AptitudeComponent } from './componentes/aptitude/aptitude.component';
import { MeritsComponent } from './componentes/merits/merits.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './componentes/footer/footer.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/expeduc/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/expeduc/edit-experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';


@Injectable({
  providedIn: 'root'
})
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExpeducComponent,
    AptitudeComponent,
    MeritsComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
