import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

// import { BreadcrumbsService } from '../../shared/services/breadcrumbs.service';
// import { CommunicationService } from '../../shared/services/communication.service';
// import { LocalizationService } from '../../shared/services/localization.service';

const APP_PREFIX = 'sauter-engineering-next-generation';

@Component({
    selector: 'content-component',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements AfterViewInit {

    home: MenuItem;

    constructor(
        private cdRef: ChangeDetectorRef,
        // public breadcrumbsService: BreadcrumbsService,
        // private translate: TranslateService,
        // private communicationService: CommunicationService,
        // private localizationService: LocalizationService,
    ) {
        // this.localizationService.setup(APP_PREFIX);
        // this.communicationService.language.subscribe(() => {
        //     if (this.communicationService.language.value) {
        //         this.changeLang(this.communicationService.language.value);
        //     }
        // });
      //  this.acService.acl.next(this.route.snapshot.data['accessControlList']);
        this.home = {icon: 'fal fa-map-marker-alt', routerLink: ['/module/sauter-engineering-next-generation']};
    }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }

    changeLang(language: string) {
        // this.translate.use(APP_PREFIX + '.' + language);
    }
}
