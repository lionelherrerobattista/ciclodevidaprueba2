import { TestBed } from '@angular/core/testing';

import { PaisesservicioService } from './paisesservicio.service';

describe('PaisesservicioService', () => {
  let service: PaisesservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisesservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
