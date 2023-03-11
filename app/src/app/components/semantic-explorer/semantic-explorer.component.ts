import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'rdflib';
import { EntityDisplayModel } from 'src/app/models/entity-display-model';
import { SemanticView } from 'src/app/models/semantic-view';

@Component({
  selector: 'app-semantic-explorer',
  templateUrl: './semantic-explorer.component.html',
  styleUrls: ['./semantic-explorer.component.scss']
})
export class SemanticExplorerComponent implements SemanticView, OnInit {

  @Input()
  public store!: Store;

  @Input()
  public model: EntityDisplayModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
