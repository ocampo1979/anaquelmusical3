import { TestBed, inject } from '@angular/core/testing';

import { DiscoDataServerService } from './disco-data-server.service';

describe('DiscoDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscoDataServerService]
    });
  });

  it('should be created', inject([DiscoDataServerService], (service: DiscoDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
