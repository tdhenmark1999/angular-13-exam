import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSampleComponent } from './components/add-sample/add-sample.component';
import { SampleDetailsComponent } from './components/sample-details/sample-details.component';
import { SamplesListComponent } from './components/samples-list/samples-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSampleComponent,
    SampleDetailsComponent,
    SamplesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
