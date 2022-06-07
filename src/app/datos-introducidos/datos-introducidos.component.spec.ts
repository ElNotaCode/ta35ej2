import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosIntroducidosComponent } from './datos-introducidos.component';

describe('DatosIntroducidosComponent', () => {
  let component: DatosIntroducidosComponent;
  let fixture: ComponentFixture<DatosIntroducidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosIntroducidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosIntroducidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
