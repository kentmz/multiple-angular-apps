import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DataInsightComponent } from '../app/datainsight/datainsight.component';
import {ScheduleModule} from '../../mycompany.productname.schedule/app/schedule.module';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        ScheduleModule
      ],
    declarations: [
        DataInsightComponent
    ],
    exports: [
        DataInsightComponent],
        bootstrap: [DataInsightComponent]
  })
  export class DashboardModule {}