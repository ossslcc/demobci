import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HamburgerService } from './hamburger.service';

describe('HamburgerService', () => {
  let service: HamburgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HamburgerService]
    });

    service = TestBed.inject(HamburgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});