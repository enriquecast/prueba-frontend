import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAplicationComponent } from './nav-bar-aplication.component';

describe('NavBarAplicationComponent', () => {
  let component: NavBarAplicationComponent;
  let fixture: ComponentFixture<NavBarAplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarAplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


