import { StorageService } from './storage.service';
import { DEFAULT_STORAGE_PROVIDER } from './storage.providers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        DEFAULT_STORAGE_PROVIDER,
        StorageService
    ]
})
export class StorageModule { }
