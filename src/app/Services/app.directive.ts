import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';
@Directive({
    selector: '[OnCreate]'
  })
  export class OnCreate {
  
    @Output()   OnCreate: EventEmitter<any> = new EventEmitter<any>();
    constructor() {}
    ngAfterViewInit() {      
       this.OnCreate.emit('dummy'); 
    } 
  }  