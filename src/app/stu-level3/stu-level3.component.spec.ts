import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuLevel3Component } from './stu-level3.component';

describe('StuLevel3Component', () => {
  let component: StuLevel3Component;
  let fixture: ComponentFixture<StuLevel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuLevel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
