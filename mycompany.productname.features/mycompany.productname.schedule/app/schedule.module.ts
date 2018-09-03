import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MySettingsComponent } from '../app/mysettings/mysettings.component';
import { MyScheduleComponent } from '../app/myschedule/myschedule.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule
      ],
    declarations: [
        MySettingsComponent,
        MyScheduleComponent
    ],
    exports: [
        MySettingsComponent,
        MyScheduleComponent
    ],
        bootstrap: [MyScheduleComponent]
  })
  export class ScheduleModule {}