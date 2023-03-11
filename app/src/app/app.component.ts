import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as RDFLib from 'rdflib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cards: any[] =  [];
  
  public store: RDFLib.Store = RDFLib.graph();

  constructor(private httpClient: HttpClient) {
  }
  
  ngOnInit(): void {
    this.httpClient.get('http://localhost:4200/resources/core', {responseType: 'text'}).subscribe(resp => {
      console.log(resp);
      RDFLib.parse(resp, this.store, 'http://example.com' as unknown as string, 'text/turtle');
      console.log(this.store.match().length);
    });
  }

  public createCard(): void {
    this.cards.push({});
  }
}
