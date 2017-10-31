import { DEFAULT_STORAGE_PROVIDER } from './../../lib/storage.providers';
import { StorageService } from 'ng-simple-storage';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageModule } from 'ng-simple-storage';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageItemsComponent } from './storage-items/storage-items.component';
import { StorageEventsComponent } from './storage-events/storage-events.component';
import { StorageFormComponent } from './storage-form/storage-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        StorageItemsComponent,
        StorageEventsComponent,
        StorageFormComponent
    ],
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        BrowserAnimationsModule,
        StorageModule,
        BrowserModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
