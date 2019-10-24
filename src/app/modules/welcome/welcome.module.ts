import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMainContainerComponent } from './containers/welcome-main-container/welcome-main-container.component';
import { RouterModule } from '@angular/router';
import { welcomeRoutes } from './welcome.routes';

@NgModule({
  declarations: [WelcomeMainContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(welcomeRoutes)
  ]
})
export class WelcomeModule { }
