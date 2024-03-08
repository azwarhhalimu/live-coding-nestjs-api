import { Module } from '@nestjs/common';
import WargaController from './warga.controller';
import PrismaService from 'src/service/prisma.service';

@Module({
  providers: [PrismaService],
  controllers: [WargaController],
})
export class WargaModule {}
