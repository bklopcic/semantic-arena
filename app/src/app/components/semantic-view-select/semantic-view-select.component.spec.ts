import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticViewSelectComponent } from './semantic-view-select-view.component';

describe('SemanticViewSelectComponent', () => {
  let component: SemanticViewSelectComponent;
  let fixture: ComponentFixture<SemanticViewSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticViewSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanticViewSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
