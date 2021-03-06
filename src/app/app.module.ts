import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { MovieService } from './movies/service/movie.service';
import { HttpModule, JsonpModule } from '@angular/http';

const appRoutes: Routes = [

  {path: '', component: MovieListComponent, canActivate: [AuthGuardService]},
  {path: 'movie/:id', component: MovieDetailComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent},
  
]


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './auth/service/auth.service';
import { AuthGuardService } from './auth-guard/service/auth-guard.service';
import { SamplesComponent } from './samples/samples.component';


export const firebaseConfig = environment.firebase;

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MovieDetailComponent,
    MovieListComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    SamplesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, 
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    AppRoutingModule
  ],
  providers: [MovieService,
    AuthService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
