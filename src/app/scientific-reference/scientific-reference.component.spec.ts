import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificReferenceComponent } from './scientific-reference.component';

describe('ScientificReferenceComponent', () => {
  let component: ScientificReferenceComponent;
  let fixture: ComponentFixture<ScientificReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientificReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientificReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
