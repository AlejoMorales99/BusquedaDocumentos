import { TestBed } from '@angular/core/testing';

import { ConsultasServicesService } from './consultas-services.service';

describe('ConsultasServicesService', () => {
  let service: ConsultasServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
