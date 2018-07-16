import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAplicationComponent } from './body-aplication.component';

describe('BodyAplicationComponent', () => {
  let component: BodyAplicationComponent;
  let fixture: ComponentFixture<BodyAplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyAplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
