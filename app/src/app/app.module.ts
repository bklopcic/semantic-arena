import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemanticExplorerComponent } from './components/semantic-explorer/semantic-explorer.component';
import { ExposeViewContainerRefDirective } from './directives/expose-view-container-ref.directive';
import { CardComponent } from './components/card/card.component';
import { SemanticViewSelectComponent } from './components/semantic-view-select/semantic-view-select-view.component';
import { SemanticViewSelectOptionsComponent } from './components/semantic-view-select/semantic-view-select-options/semantic-view-select-options.component';

@NgModule({
  declarations: [
    AppComponent,
    SemanticExplorerComponent,
    ExposeViewContainerRefDirective,
    CardComponent,
    SemanticViewSelectComponent,
    SemanticViewSelectOptionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
