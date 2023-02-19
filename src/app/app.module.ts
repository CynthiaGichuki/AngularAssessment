import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BalanceFilterPipe } from './balance-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BalanceFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
