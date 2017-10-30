import { StorageItemChangeEvent } from './../../../lib/storage.models';
import { StorageService } from 'ng-simple-storage';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngss-d-storage-events',
    templateUrl: './storage-events.component.html',
    styleUrls: ['./storage-events.component.scss']
})
export class StorageEventsComponent implements OnInit {

    events: StorageItemChangeEvent[] = [];

    constructor(
        private storage: StorageService
    ) { }

    ngOnInit() {
        this.storage.onItemChange.subscribe(event => {
            this.events.push(event);
        });
    }

}
