import { TestBed } from '@angular/core/testing';

import { SuperviseurService } from '../list-superviseur/superviseur.service';

describe('SuperviseurService', () => {
  let service: SuperviseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperviseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
