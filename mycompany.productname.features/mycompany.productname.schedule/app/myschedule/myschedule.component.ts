import {Component} from '@angular/core'

@Component(
    {
        selector:'my-schedule',
        templateUrl:'myschedule.component.html'
    }
)

export class MyScheduleComponent{
    componentName:any;

    constructor(){
        this.componentName="My Schedule";
    }
}