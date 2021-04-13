import { TestBed } from '@angular/core/testing';

import { SessaoPrincipalService } from './sessao-principal.service';

describe('SessaoPrincipalService', () => {
  let service: SessaoPrincipalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessaoPrincipalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
