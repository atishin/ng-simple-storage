import { ItemMetadata } from './../storage-items/storage-items.component';
import { StorageService } from 'ng-simple-storage';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'ngss-d-storage-form',
    templateUrl: './storage-form.component.html',
    styleUrls: ['./storage-form.component.scss']
})
export class StorageFormComponent implements OnInit {

    keyControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
    valueControl = new FormControl(null);
    sessionStorageControl = new FormControl(false);

    @Input() public set editItem(value: ItemMetadata) {
        if (!value) {
            return;
        }
        this.keyControl.setValue(value.key);
        this.valueControl.setValue(value.value);
    }

    @Output() public onStorageSwitched = new EventEmitter();

    constructor(
        private storage: StorageService,
        private matSnackbar: MatSnackBar
    ) {
    }

    ngOnInit() {
        this.sessionStorageControl.valueChanges.subscribe(useSessionlStorage => {
            if (useSessionlStorage) {
                this.storage.setStorage(sessionStorage);
            } else {
                this.storage.setStorage(localStorage);
            }
            this.onStorageSwitched.emit();
        });
    }

    setItem() {
        if (this.keyControl.valid) {
            this.storage.setItem(this.keyControl.value, this.valueControl.value);
        }
    }

    removeItem() {
        if (this.keyControl.valid) {
            this.storage.removeItem(this.keyControl.value);
        }
    }

    getItem() {
        if (this.keyControl.valid) {
            this.matSnackbar.open(`Key: ${this.keyControl.value}; Value: ${JSON.stringify(this.storage.getItem(this.keyControl.value))}`);
        }
    }

    clearStorage() {
        this.storage.clear();
    }

}
