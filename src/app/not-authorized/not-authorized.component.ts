import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'not-authorized-component',
    templateUrl: './not-authorized.component.html',
    styleUrls: ['./not-authorized.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NotAuthorizedComponent {
}
