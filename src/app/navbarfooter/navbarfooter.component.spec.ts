import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarfooterComponent } from './navbarfooter.component';

describe('NavbarfooterComponent', () => {
  let component: NavbarfooterComponent;
  let fixture: ComponentFixture<NavbarfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
