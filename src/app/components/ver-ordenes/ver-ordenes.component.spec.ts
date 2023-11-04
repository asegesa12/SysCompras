import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerOrdenesComponent } from './ver-ordenes.component';

describe('VerOrdenesComponent', () => {
  let component: VerOrdenesComponent;
  let fixture: ComponentFixture<VerOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerOrdenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
