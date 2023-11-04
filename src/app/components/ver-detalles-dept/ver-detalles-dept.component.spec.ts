import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetallesDeptComponent } from './ver-detalles-dept.component';

describe('VerDetallesDeptComponent', () => {
  let component: VerDetallesDeptComponent;
  let fixture: ComponentFixture<VerDetallesDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDetallesDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDetallesDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
