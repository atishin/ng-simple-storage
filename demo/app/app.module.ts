import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageModule } from 'ng-simple-storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StorageModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
