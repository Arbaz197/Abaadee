import { Test, TestingModule } from '@nestjs/testing';
import { ServicescontrollerController } from './servicescontroller.controller';

describe('ServicescontrollerController', () => {
  let controller: ServicescontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicescontrollerController],
    }).compile();

    controller = module.get<ServicescontrollerController>(ServicescontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
