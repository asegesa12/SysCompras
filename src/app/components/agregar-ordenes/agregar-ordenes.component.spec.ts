import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarOrdenesComponent } from './agregar-ordenes.component';

describe('AgregarOrdenesComponent', () => {
  let component: AgregarOrdenesComponent;
  let fixture: ComponentFixture<AgregarOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarOrdenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
