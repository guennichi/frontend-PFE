import { TestBed } from '@angular/core/testing';

import { ListPaysService } from '../list-pays/list-pays.service';

describe('ListPaysService', () => {
  let service: ListPaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
