import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticExplorerComponent } from './semantic-explorer.component';

describe('SemanticExplorerComponent', () => {
  let component: SemanticExplorerComponent;
  let fixture: ComponentFixture<SemanticExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticExplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanticExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
