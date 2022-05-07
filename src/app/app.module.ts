import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { FlickerScreenComponent } from './components/flicker-screen/flicker-screen.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { DesktopScreenComponent } from './components/desktop-screen/desktop-screen.component';
import { InitScreenComponent } from './components/init-screen/init-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent,
    FlickerScreenComponent,
    WelcomeScreenComponent,
    DesktopScreenComponent,
    InitScreenComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
