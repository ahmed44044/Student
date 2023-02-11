import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuLevel4Component } from './stu-level4.component';

describe('StuLevel4Component', () => {
  let component: StuLevel4Component;
  let fixture: ComponentFixture<StuLevel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuLevel4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuLevel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
