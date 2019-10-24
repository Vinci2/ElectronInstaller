import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainContainerComponent } from './containers/home-main-container/home-main-container.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { HomeHttpService } from './services/home-http.service';
import { HomeStateService } from './services/home-state.service';

@NgModule({
  declarations: [HomeMainContainerComponent],
  providers: [HomeStateService, HomeHttpService],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
