import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseList3Component } from './add-course-list3.component';

describe('AddCourseList3Component', () => {
  let component: AddCourseList3Component;
  let fixture: ComponentFixture<AddCourseList3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseList3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
