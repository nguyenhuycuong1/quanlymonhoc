import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';

import { SubjectListRoutingModule } from './subject-list-routing.module';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewSubjectComponent } from './add-new-subject/add-new-subject.component';
@NgModule({
  declarations: [SubjectListComponent, AddNewSubjectComponent],
  imports: [
    CommonModule,
    SubjectListRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzSelectModule,
    NzInputModule,
    NzModalModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SubjectListComponent],
})
export class SubjectListModule {}
