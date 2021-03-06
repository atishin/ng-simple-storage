import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StorageService } from 'ng-simple-storage';
import * as _ from 'lodash';

export class ItemMetadata {
    key: string;
    value: any;
    constructor(itemMetadata: Partial<ItemMetadata> = {}) {
        Object.assign(this, itemMetadata);
    }
}

@Component({
    selector: 'ngss-d-storage-items',
    templateUrl: './storage-items.component.html',
    styleUrls: ['./storage-items.component.scss']
})
export class StorageItemsComponent implements OnInit {

    public items: { key: string, value: any }[];

    @Output() public onEditItem = new EventEmitter<ItemMetadata>();

    constructor(
        private storage: StorageService
    ) { }

    public update() {
        this.getItems();
    }

    ngOnInit() {
        this.storage.onItemChange.subscribe(event => {
            this.getItems();
        });
        this.getItems();
    }

    private getItems() {
        this.items = _(this.storage.items).keys().map(key => {
            return {
                key,
                value: this.storage.getItem<any>(key)
            };
        }).value();
    }

    public removeItem(item: ItemMetadata) {
        this.storage.removeItem(item.key);
    }

    public editItem(item: ItemMetadata) {
        this.onEditItem.emit(new ItemMetadata(item));
    }

}
