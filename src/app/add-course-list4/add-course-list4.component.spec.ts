import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseList4Component } from './add-course-list4.component';

describe('AddCourseList4Component', () => {
  let component: AddCourseList4Component;
  let fixture: ComponentFixture<AddCourseList4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseList4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseList4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
