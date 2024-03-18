import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    // AppRoutingModule,
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
