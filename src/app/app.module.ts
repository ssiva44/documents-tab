import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TableComponent } from './app.tableapi';
import { Tab } from './Tab';
import { Tabset } from './Tabset';
import { APIConnectionService  } from './app.apiconnectionservice';
import { DataTablesModule } from 'angular-datatables';
import { DateFormatPipe } from './date.pipe';
import { ObjectFilterPipe } from './objectFilter.pipe';
import { ExcelService } from './excel.service';


@NgModule({
  declarations: [
    AppComponent,Tab,Tabset,TableComponent,DateFormatPipe,ObjectFilterPipe

  ],
  imports: [
    BrowserModule, HttpModule, DataTablesModule
  ],
  providers: [APIConnectionService,ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
