import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KelurahanModule } from './kelurahan/kelurahan.module';
import { WargaModule } from './warga/warga.module';

@Module({
  imports: [KelurahanModule, WargaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
