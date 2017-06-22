import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PortalComponent } from './portal.component';
import { appRoutes } from './portal.routing';
import { NavbarModule } from '../shared/navbar/navbar.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MdGridListModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdAutocompleteModule
} from '@angular/material';
import { DialogComponent } from '../shared/Dialog/dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    NavbarModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdGridListModule,
    MdAutocompleteModule
  ],
  exports: [],
  declarations: [
    PortalComponent,
    DialogComponent
  ],
  providers: [],
})
export class PortalModule {
}
