const SHIM_USING_MESSAGE = 'You are using storage shim, as window object is not present. Please register your custom provider';
export class StorageShim implements Storage {

    constructor() {
        console.warn(SHIM_USING_MESSAGE);
    }

    [index: number]: string;
    [key: string]: any;
    length: number;
    clear(): void {
        console.warn(SHIM_USING_MESSAGE);
    }
    getItem(key: string): string {
        console.warn(SHIM_USING_MESSAGE);
        return undefined;
    }
    key(index: number): string {
        console.warn(SHIM_USING_MESSAGE);
        return undefined;
    }
    removeItem(key: string): void {
        console.warn(SHIM_USING_MESSAGE);
    }
    setItem(key: string, data: string): void {
        console.warn(SHIM_USING_MESSAGE);
    }

}
