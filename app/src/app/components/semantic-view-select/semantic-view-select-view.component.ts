import { Component, Input, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { Store } from 'rdflib';
import { Subscription } from 'rxjs';
import { SemanticView } from 'src/app/models/semantic-view';
import { SemanticExplorerComponent } from '../semantic-explorer/semantic-explorer.component';
import { SemanticViewSelectOptionsComponent } from './semantic-view-select-options/semantic-view-select-options.component';

@Component({
  selector: 'app-semantic-view-select',
  templateUrl: './semantic-view-select.component.html',
  styleUrls: ['./semantic-view-select.component.scss']
})
export class SemanticViewSelectComponent implements SemanticView, OnInit, OnDestroy {


  #options: any = [
    {
      label: 'Semantic Explorer',
      component: SemanticExplorerComponent
    },
    {
      label: 'Champion Arena',
      component: SemanticExplorerComponent
    },
    {
      label: 'Query Console',
      component: SemanticExplorerComponent
    }
  ];

  #viewSelectSub!: Subscription;

  @Input()
  public store!: Store;

  constructor(private containerRef: ViewContainerRef) { }
  
  ngOnInit(): void {
    const component = this.become(SemanticViewSelectOptionsComponent);
    
    component.options = this.#options;
    
    this.#viewSelectSub = component.selected$.subscribe(selected => {
      this.#viewSelectSub.unsubscribe();
      this.createView(selected);
    });
  }
  
  public createView(viewOpt: any): void {
    const component = this.become<SemanticView>(viewOpt.component);

    component.store = this.store;
  }
  
  private become<T>(componentType: Type<T>): T {
    this.containerRef.clear();
    const component = this.containerRef.createComponent<T>(componentType);
    
    return component.instance;
  }
  
  public ngOnDestroy(): void {
    this.#viewSelectSub?.unsubscribe();
  }
}
