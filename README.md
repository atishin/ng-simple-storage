# ng-simpe-storage

This library is a simple wrapper on a **localStorage**

## Installation

Run `npm install --save ng-simple-storage`

## API reference for `ng-simple-storage`

`import { StorageService } from 'ng-simple-storage`

## Services

### `StorageService`

#### Properties

**`length:`** *`number`* - Currently storred items count

**`item:`** *`{ key: value }`* -  Currently storred items

**`onItemChange:`** *`Observable<StorageItemChangeEvent>`* - Observable which fires when item in storage changes



#### Methods

__`clear(): `__*`void`* - clear storage

__`getItem<`__*`Type`*__`>(key: `__ *`string`*__`): `__*`Type`* - return item by key

__`removeItem<`__*`Type`*__`>(key: `__ *`string`*__`): `__*`void`* - remove item by key

__`key(index: `__ *`number`*__`): `__*`string`* - return the key of item at the specified index

__`setItem<`__*`Type`*__`>(key: `__ *`string`*__`, value: `__ *`Type`*__`): `__*`void`* - save item with a specified key

__`setStorage(storage: `__ *`Storage`*__`): `__*`void`* - change storage used by the service

## Aditional classes

### `StorageItemChangeEvent<`_`T`_`>`

#### Properties

__`key: `*`string`*__ - key of changed item

__`oldValue: `*`T`*__ - value of item before event emitted

__`newValue: `*`T`*__ - current value of item

## Setting custom storage

You can provide your own implementation of storage by

    { provide: DEFAULT_STORAGE, useValue: CustomStorage }

`CustomStorage` must implement `Storage` interface