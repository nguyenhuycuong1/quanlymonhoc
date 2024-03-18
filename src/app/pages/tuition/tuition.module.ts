import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuitionRoutingModule } from './tuition-routing.module';
import { TuitionComponent } from './tuition/tuition.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TuitionComponent],
  imports: [
    CommonModule,
    TuitionRoutingModule,
    NzSelectModule,
    NzTableModule,
    NzGridModule,
    FormsModule,
  ],
  exports: [TuitionComponent],
})
export class TuitionModule {}
