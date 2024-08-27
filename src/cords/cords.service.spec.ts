import { Test, TestingModule } from '@nestjs/testing';
import { CordsService } from './cords.service';

describe('CordsService', () => {
  let service: CordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CordsService],
    }).compile();

    service = module.get<CordsService>(CordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
