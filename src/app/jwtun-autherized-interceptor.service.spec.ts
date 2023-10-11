import { TestBed } from '@angular/core/testing';

import { JWTUnAutherizedInterceptorService } from './jwtun-autherized-interceptor.service';

describe('JWTUnAutherizedInterceptorService', () => {
  let service: JWTUnAutherizedInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWTUnAutherizedInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
