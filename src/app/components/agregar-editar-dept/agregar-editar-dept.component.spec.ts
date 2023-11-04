import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarDeptComponent } from './agregar-editar-dept.component';

describe('AgregarEditarDeptComponent', () => {
  let component: AgregarEditarDeptComponent;
  let fixture: ComponentFixture<AgregarEditarDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
