import { StorageItemChangeEvent } from './storage.models';
import { DEFAULT_STORAGE } from './storage.providers';
import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StorageService {

    private onItemChangeSubject = new Subject<StorageItemChangeEvent>();
    public onItemChange: Observable<StorageItemChangeEvent> = this.onItemChangeSubject.asObservable();

    get length() {
        return this.storage.length;
    }

    get items() {
        const items = {};
        for (let i = 0; i < this.length; i ++) {
            const key = this.key(i);
            const item = this.getItem(key);
            items[key] = item;
        }
        return items;
    }

    constructor( @Inject(DEFAULT_STORAGE) private storage: Storage) { }

    clear(): void {
        const events: StorageItemChangeEvent[] = [];
        for (let i = 0; i < this.storage.length; i++) {
            const key = this.storage.key(i);
            const oldValue = this.getItem(key);
            const newValue = undefined;
            const event = new StorageItemChangeEvent({
                key, oldValue, newValue
            });
            events.push(event);
        }

        this.storage.clear();
        events.forEach(event => this.onItemChangeSubject.next(event));
    }

    getItem<T>(key: string): T {
        const item = this.storage.getItem(key);
        if (item != null) {
            return JSON.parse(item) as T;
        } else {
            return undefined;
        }
    }

    key(index: number): string {
        return this.storage.key(index);
    }

    removeItem<T>(key: string): void {
        const event = new StorageItemChangeEvent<T>({ key, oldValue: this.getItem<T>(key), newValue: undefined });
        this.storage.removeItem(key);
        this.onItemChangeSubject.next(event);
    }

    setItem<T>(key: string, data: T): void {
        const item = JSON.stringify(data);
        const event = new StorageItemChangeEvent<T>({ key, oldValue: this.getItem<T>(key), newValue: data });
        this.storage.setItem(key, item);
        this.onItemChangeSubject.next(event);
    }

    setStorage(storage: Storage) {
        this.storage = storage;
    }

}
