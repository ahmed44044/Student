import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseListComponent } from './add-course-list.component';

describe('AddCourseListComponent', () => {
  let component: AddCourseListComponent;
  let fixture: ComponentFixture<AddCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
