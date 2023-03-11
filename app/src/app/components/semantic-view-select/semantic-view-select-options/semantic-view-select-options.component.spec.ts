import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticViewSelectOptionsComponent } from './semantic-view-select-options.component';

describe('SemanticViewSelectOptionsComponent', () => {
  let component: SemanticViewSelectOptionsComponent;
  let fixture: ComponentFixture<SemanticViewSelectOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticViewSelectOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanticViewSelectOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
