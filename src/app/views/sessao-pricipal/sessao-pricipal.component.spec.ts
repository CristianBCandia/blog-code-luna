import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoPricipalComponent } from './sessao-pricipal.component';

describe('SessaoPricipalComponent', () => {
  let component: SessaoPricipalComponent;
  let fixture: ComponentFixture<SessaoPricipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessaoPricipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoPricipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
