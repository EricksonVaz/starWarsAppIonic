import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FavoriteService } from './services/favorite.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicStorageModule.forRoot()],
  providers: [ApiService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },EmailComposer,FavoriteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
