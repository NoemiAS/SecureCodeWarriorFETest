import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesRoutingModule } from './languages-routing.module';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

import { LanguagesListComponent } from './languages-list/languages-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LanguagesRoutingModule
    ],
    declarations: [LanguagesListComponent, FilterPipe]
})
export class LanguagesModule { }
