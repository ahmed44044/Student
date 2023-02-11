import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuLevel2Component } from './stu-level2.component';

describe('StuLevel2Component', () => {
  let component: StuLevel2Component;
  let fixture: ComponentFixture<StuLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuLevel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
