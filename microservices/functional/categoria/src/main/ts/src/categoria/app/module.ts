import {CategoriaView} from './views/categoria/categoria-view.component'
import {TabelaView} from './views/tabela/tabela-view.component'
//===============================ANGULAR MODULES=================================
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdSelectModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Md2DatepickerModule } from 'md2/datepicker';
//===============================COVALENT MODULES================================
import {
  CovalentChipsModule,
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentFileModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMessageModule,
  CovalentPagingModule,
  CovalentStepsModule,
  TdDialogService,
  TdLayoutComponent,
} from '@covalent/core';
//===============================APP MODULES=====================================
import { appRoutingProviders, RoutingModule } from './routing.module';
import 'rxjs/add/observable/throw';
//import {CategoriaView} from '';
//==============================APP SERVICES=====================================
//==============================APP COMPONENTS===================================

//=============================APP DIRECTIVES====================================

//===============================APP MODELS======================================

// Ngx-Translate
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, 'static/i18n/', '.json');
}

/**
 *
 */
@NgModule({
  declarations: [
    CategoriaView,
    TabelaView
  ],
  imports: [
    HttpModule,
    BrowserAnimationsModule,
    BrowserModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentChipsModule,
    CovalentFileModule,
    CovalentExpansionPanelModule,
    CovalentPagingModule,
    CovalentLoadingModule,
    CovalentMediaModule,
    CovalentMessageModule,
    CovalentCommonModule,
    CovalentDataTableModule,
    CovalentDialogsModule,
    MdAutocompleteModule,
    MdIconModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdInputModule,
    MdCheckboxModule,
    MdRadioModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdDialogModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdListModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTooltipModule,
    MdProgressSpinnerModule,
    MdButtonToggleModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    RoutingModule,
    Md2DatepickerModule
  ],
  exports: [
    BrowserModule,
    CategoriaView,
    TabelaView
  ],
  providers: [
    appRoutingProviders,
    TdLayoutComponent,
    TdDialogService,
  ],
  bootstrap: [
    CategoriaView,
    TabelaView
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class Module {

}
