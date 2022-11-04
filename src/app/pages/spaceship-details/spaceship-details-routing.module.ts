import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Spaceship-detailsDetailsPage } from './spaceship-details.page';

const routes: Routes = [
  {
    path: '',
    component: Spaceship-detailsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Spaceship-detailsDetailsPageRoutingModule {}
