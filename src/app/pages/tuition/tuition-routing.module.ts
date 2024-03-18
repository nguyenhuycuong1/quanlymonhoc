import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuitionComponent } from './tuition/tuition.component';

const routes: Routes = [{ path: '', component: TuitionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuitionRoutingModule {}
