import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { PageTitleDirective } from '../page-title.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  declarations: [AppComponent, PageTitleDirective],
  bootstrap: [AppComponent],
})
export class AppModule { }