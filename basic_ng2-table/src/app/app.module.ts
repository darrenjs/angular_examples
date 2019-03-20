import { BrowserModule } from '@angular/platform-browser';
import { NgModule   } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ng2-bootstrap/pagination';

import { Ng2TableModule } from 'ng2-table/ng2-table';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    PaginationModule.forRoot(),
    Ng2TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
