import { Component, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-semantic-view-select-options',
  templateUrl: './semantic-view-select-options.component.html',
  styleUrls: ['./semantic-view-select-options.component.scss']
})
export class SemanticViewSelectOptionsComponent {

  #select$: Subject<any> = new Subject();

  @Input()
  public options: any;

  @Output()
  public selected$: Observable<any> = this.#select$.asObservable();

  constructor() { }

  public onClick(opt: any): void {
    this.#select$.next(opt);
  }

}
