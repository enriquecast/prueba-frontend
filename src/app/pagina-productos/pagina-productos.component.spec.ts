import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProductosComponent } from './pagina-productos.component';

describe('PaginaProductosComponent', () => {
  let component: PaginaProductosComponent;
  let fixture: ComponentFixture<PaginaProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
