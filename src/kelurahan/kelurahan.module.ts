import { Module } from '@nestjs/common';
import KelurahanController from './kelurahan.controller';
import PrismaService from 'src/service/prisma.service';

@Module({
  imports: [],
  controllers: [KelurahanController],
  providers: [PrismaService],
})
export class KelurahanModule {}
