import {Component} from '@angular/core'

@Component(
    {
        selector:'datainsights',
        templateUrl:'datainsight.component.html'
    }
)

export class DataInsightComponent{
    componentName:any;

    constructor(){
        this.componentName="Data Insights";
    }
}