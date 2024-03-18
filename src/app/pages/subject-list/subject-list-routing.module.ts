import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { AddNewSubjectComponent } from './add-new-subject/add-new-subject.component';

const routes: Routes = [
  { path: '', component: SubjectListComponent },
  { path: 'new-subject', component: AddNewSubjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectListRoutingModule {}
