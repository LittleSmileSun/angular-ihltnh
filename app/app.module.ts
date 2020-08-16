import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, ProjectComponent
  ],
  entryComponents: [
    ProjectComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }