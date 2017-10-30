import { StorageShim } from './storage.shim';
import { InjectionToken, FactoryProvider } from '@angular/core';

export const DEFAULT_STORAGE = new InjectionToken('ngss.default-storage');

export const DEFAULT_STORAGE_FACTORY = () => {
    if (window) {
        return localStorage;
    } else {
        return new StorageShim();
    }
};

export const DEFAULT_STORAGE_PROVIDER: FactoryProvider = {
    provide: DEFAULT_STORAGE,
    useFactory: DEFAULT_STORAGE_FACTORY
};
