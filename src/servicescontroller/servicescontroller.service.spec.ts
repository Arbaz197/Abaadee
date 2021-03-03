import { Test, TestingModule } from '@nestjs/testing';
import { ServicescontrollerService } from './servicescontroller.service';

describe('ServicescontrollerService', () => {
  let service: ServicescontrollerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicescontrollerService],
    }).compile();

    service = module.get<ServicescontrollerService>(ServicescontrollerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
