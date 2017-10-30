import { StorageService } from 'ng-simple-storage';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'ngss-d-storage-form',
    templateUrl: './storage-form.component.html',
    styleUrls: ['./storage-form.component.scss']
})
export class StorageFormComponent implements OnInit {

    keyControl = new FormControl(null, [Validators.required, Validators.minLength(1)]);
    valueControl = new FormControl(null);

    constructor(
        private storage: StorageService
    ) { 
        console.log(storage);
    }

    ngOnInit() {
    }

    setItem() {
        if (this.keyControl.valid) {
            this.storage.setItem(this.keyControl.value, this.valueControl.value);
        }
    }

}
