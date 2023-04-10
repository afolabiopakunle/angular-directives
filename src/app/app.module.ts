import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BasicHighlightDirective } from '../basic-highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  declarations: [AppComponent, BasicHighlightDirective],
  bootstrap: [AppComponent],
})
export class AppModule { }