import { TestBed } from '@angular/core/testing';

import { AuditManagementService } from './audit-management.service';

describe('AuditManagementService', () => {
  let service: AuditManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
