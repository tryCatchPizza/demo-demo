import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// import { AuthService } from '../shared/services/auth.service';

// import { BreadcrumbsService } from '../shared/services/breadcrumbs.service';
// import { SengResourceType } from '../shared/models/access-control';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    // permissionsLoaded: boolean;

    constructor(
        private router: Router,
        // private breadcrumbsService: BreadcrumbsService,
        // private translate: TranslateService,
        // private authService: AuthService
    ) { }

    ngOnInit() {
        // this.breadcrumbsService.set({label: this.translate.instant('HOME.LABEL')});

        // this.translate.onLangChange.subscribe(() => {
        //     this.breadcrumbsService.set({label: this.translate.instant('HOME.LABEL')});
        // });
        this.getData();
    }

    getData() {
        // this.authService.getResourceTypeAcl(SengResourceType.Projects).subscribe(() => {
        //     this.permissionsLoaded = true;
        // });
    }

    checkProjectAction() {
        // return this.authService.permissionMet(SengResourceType.Projects);
    }

    openProjectsPage() {
        this.router.navigate(['projects']);
    }

    openRepositoriesPage() {
        this.router.navigate(['repositories']);
    }
}
