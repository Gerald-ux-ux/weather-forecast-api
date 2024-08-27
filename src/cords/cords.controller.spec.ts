import { Test, TestingModule } from '@nestjs/testing';
import { CordsController } from './cords.controller';

describe('CordsController', () => {
  let controller: CordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CordsController],
    }).compile();

    controller = module.get<CordsController>(CordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
