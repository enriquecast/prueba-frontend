import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAplicationComponent } from './index-aplication.component';

describe('IndexAplicationComponent', () => {
  let component: IndexAplicationComponent;
  let fixture: ComponentFixture<IndexAplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
