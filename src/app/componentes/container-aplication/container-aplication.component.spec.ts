import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAplicationComponent } from './container-aplication.component';

describe('ContainerAplicationComponent', () => {
  let component: ContainerAplicationComponent;
  let fixture: ComponentFixture<ContainerAplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerAplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
