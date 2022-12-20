import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ConsultasServicesService } from './consultas-services.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [ConsultasServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
