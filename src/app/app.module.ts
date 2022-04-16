import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
