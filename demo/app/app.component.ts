import { ItemMetadata } from './storage-items/storage-items.component';
import { Component } from '@angular/core';

@Component({
    selector: 'ngss-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular Simple Storage';

    editItem: ItemMetadata;
}
