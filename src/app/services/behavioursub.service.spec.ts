import { TestBed } from '@angular/core/testing';

import { BehavioursubService } from './behavioursub.service';

describe('BehavioursubService', () => {
  let service: BehavioursubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehavioursubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
