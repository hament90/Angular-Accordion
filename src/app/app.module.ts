import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicViewComponent } from './basic-view/basic-view.component';
import { AccSubTabViewComponent } from './acc-sub-tab-view/acc-sub-tab-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicViewComponent,
    AccSubTabViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
