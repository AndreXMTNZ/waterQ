import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ControlComponent } from './pages/control/control.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"waterlevel-7317a","appId":"1:198692226071:web:fed4501a4830ddebc50852","databaseURL":"https://waterlevel-7317a-default-rtdb.firebaseio.com","storageBucket":"waterlevel-7317a.firebasestorage.app","apiKey":"AIzaSyBSJq-Wdp2TXNK1elLYPLNXjQNGuSJ7X4w","authDomain":"waterlevel-7317a.firebaseapp.com","messagingSenderId":"198692226071"})), provideDatabase(() => getDatabase())],
  bootstrap: [AppComponent],
})
export class AppModule {}
