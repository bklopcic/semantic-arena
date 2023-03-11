import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ExposeViewContainerRef]'
})
export class ExposeViewContainerRefDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
