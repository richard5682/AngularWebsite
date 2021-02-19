/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConnectGetService } from './connectGet.service';

describe('Service: ConnectGet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectGetService]
    });
  });

  it('should ...', inject([ConnectGetService], (service: ConnectGetService) => {
    expect(service).toBeTruthy();
  }));
});
