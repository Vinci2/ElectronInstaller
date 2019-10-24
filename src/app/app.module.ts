import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ExternalParametersService } from './services/external-parameters.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxElectronModule
  ],
  providers: [ExternalParametersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
