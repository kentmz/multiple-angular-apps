import {Component} from '@angular/core'

@Component(
    {
        selector:'my-settings',
        templateUrl:'mysettings.component.html'
    }
)

export class MySettingsComponent{
    componentName:any;

    constructor(){
        this.componentName="My Settings";
    }
}