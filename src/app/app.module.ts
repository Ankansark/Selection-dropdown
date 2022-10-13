import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultipleSelectDropdownComponent } from './components/multiple-select-dropdown/multiple-select-dropdown.component';
import { SingleSelectDropdownComponent } from './components/single-select-dropdown/single-select-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleSelectDropdownComponent,
    SingleSelectDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
