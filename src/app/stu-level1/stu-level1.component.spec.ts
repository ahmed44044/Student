import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuLevel1Component } from './stu-level1.component';

describe('StuLevel1Component', () => {
  let component: StuLevel1Component;
  let fixture: ComponentFixture<StuLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuLevel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
