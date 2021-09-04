import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  exports: [RouterModule],
})
export class AppRoutingModule {}
