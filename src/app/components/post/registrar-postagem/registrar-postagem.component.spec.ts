import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPostagemComponent } from './registrar-postagem.component';

describe('RegistrarPostagemComponent', () => {
  let component: RegistrarPostagemComponent;
  let fixture: ComponentFixture<RegistrarPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPostagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
