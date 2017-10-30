export class StorageItemChangeEvent<T = any> {
    key: string;
    oldValue: T;
    newValue: T;

    constructor(event: Partial<StorageItemChangeEvent<T>> = {}) {
        Object.assign(this, event);
    }
}
