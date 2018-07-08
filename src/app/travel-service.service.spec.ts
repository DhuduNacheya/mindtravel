import { TestBed, inject } from '@angular/core/testing';

import { TravelServiceService } from './travel-service.service';

describe('TravelServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelServiceService]
    });
  });

  it('should be created', inject([TravelServiceService], (service: TravelServiceService) => {
    expect(service).toBeTruthy();
  }));
});
