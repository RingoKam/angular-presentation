import { RouterModule } from '@angular/router';
import { FeedbackModule } from './../../feedback/feedback.module';
import { PresentationModule } from './../../presentation/presentation.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByTheWayComponent } from './by-the-way.component';
import { SlidesRoutes } from '../../presentation/slide-routes';


const routes = RouterModule.forChild(
  SlidesRoutes.get(ByTheWayComponent)
);

@NgModule({
  imports: [routes, PresentationModule, FeedbackModule, CommonModule],
  declarations: [ByTheWayComponent],
  exports: [ByTheWayComponent]
})
export class ByTheWayModule {
}
