import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerListadoDeptComponent } from './ver-listado-dept.component';

describe('VerListadoDeptComponent', () => {
  let component: VerListadoDeptComponent;
  let fixture: ComponentFixture<VerListadoDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerListadoDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerListadoDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
