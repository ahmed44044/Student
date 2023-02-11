import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglemoviesComponent } from './singlemovies.component';

describe('SinglemoviesComponent', () => {
  let component: SinglemoviesComponent;
  let fixture: ComponentFixture<SinglemoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglemoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
