import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantCoursesComponent } from './important-courses.component';

describe('ImportantCoursesComponent', () => {
  let component: ImportantCoursesComponent;
  let fixture: ComponentFixture<ImportantCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportantCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
