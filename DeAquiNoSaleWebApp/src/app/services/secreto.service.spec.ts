import { TestBed } from '@angular/core/testing';

import { SecretoService } from './secreto.service';

describe('SecretoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecretoService = TestBed.get(SecretoService);
    expect(service).toBeTruthy();
  });
});
