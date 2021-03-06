import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterSampleApplicationModulBSharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleApplicationModulBAppRoutingModule} from './app-routing.module';
import { JhipsterSampleApplicationModulBHomeModule } from './home/home.module';
import { JhipsterSampleApplicationModulBAdminModule } from './admin/admin.module';
import { JhipsterSampleApplicationModulBAccountModule } from './account/account.module';
import { JhipsterSampleApplicationModulBEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSampleApplicationModulBAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleApplicationModulBSharedModule,
        JhipsterSampleApplicationModulBHomeModule,
        JhipsterSampleApplicationModulBAdminModule,
        JhipsterSampleApplicationModulBAccountModule,
        JhipsterSampleApplicationModulBEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleApplicationModulBAppModule {}
