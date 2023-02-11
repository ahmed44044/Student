import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseList2Component } from './add-course-list2.component';

describe('AddCourseList2Component', () => {
  let component: AddCourseList2Component;
  let fixture: ComponentFixture<AddCourseList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseList2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
